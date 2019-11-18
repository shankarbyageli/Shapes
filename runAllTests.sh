for testFile in tests/*
do
  echo "running $testFile ...";
  node $testFile;
done
