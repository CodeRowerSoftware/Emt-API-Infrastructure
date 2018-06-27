call  yarn 
cd ./packages
cd ./AppShared
call  yarn 
call yarn build
cd..

cd ./Interfaces
call yarn
call yarn build
cd..

cd ./Logger
call yarn
call yarn build

cd..
cd..

