runTest() {
  local test=$1
  local command=`head -1 $test`
  #echo $command
  sed "1d" $test > expected.txt
  #cat expected_output.txt
  $command > output.txt 2>output.txt
  cmp output.txt expected.txt > /dev/null
  if [ $? -eq 0 ]
  then
    result="✅"
  else
    result="❌"
    echo "---------$test----------" >> failures.txt
    echo "\t\t\t<= command =>\n$command" >> failures.txt
    echo "\n\t\t\t<= actual output =>" >> failures.txt
    cat output.txt >> failures.txt
    echo "\n\t\t\t<= expected output =>" >> failures.txt
    cat expected.txt >> failures.txt
    rm output.txt expected.txt
  fi
  echo "$result $test"
}
echo "running $# tests"
echo "----- starting  ---------"
rm -f failures.txt
for test in $*
do
  runTest $test
done
echo "----- ending  ---------"
if test -f failures.txt
then
  date >> failures.txt
  echo "please look at failures.txt for details"
fi
