npm test | awk 'BEGIN {show=0} (show == 1) {print $0}; /passing/ {print $0; show=1}';
