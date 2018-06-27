# Emt-API-Infrastructure

# To build you need to build all the packages 
## using CMD you can execute the following commands

```

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

```

Or you can use *build.bat* script