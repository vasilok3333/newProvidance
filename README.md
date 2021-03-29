1. git clone https://github.com/OlehTychenko/newProvidance.git -добавить репозиторій в локальну папку
2. git pull - стягуєш нові зміни
3. git checkout -b branch_name (add_section_features) - створюєш нову бренчу і працюєш на ній
4. git add . - додаєш зміни в файлах
5. git commit -m 'add section name' - комітаєш зміни
6. git push -u origin brenchName - пушаєш бренку в пул реквести
7. git pull - з бренчі мейн пулаєш нові зміни і йдуш на пункт 3







///////////////////////////////////////         Use this one
1. git checkout -b branchName
2. git add .
3. git commit -m 'message'
4. git checkout main
5. git pull
6. git checkout branchName
7. git merge main
8. git add .
9. git commit -m 'message' // if error resolve conflicts and got to point 10
10. git merge --contunue
11. git push -u origin branchName