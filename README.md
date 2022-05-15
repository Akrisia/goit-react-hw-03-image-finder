git commit -a1. Заходимо в папку cd (шлях на пк, де буде лежати реп) 2. Клонуємо
збірку git clone https://github.com/goitacademy/react-homework-template (назва
папки/дз) 3. Створюємо реп на гітхабі з такою назвою 4. Зв"язуємо репи:

- переходим в папку репа на пк cd (назва папки/дз)
- міняємо шлях git remote set-url origin (ваш лінк).git
- перевіряємо, чи все ок git remote -v

5. На гітхабі в репі заходим в налаштування - actions - general і йдемо вниз - в
   Workflow Permissions обираємо Read and Write Permissions і галочку allow -
   save
6. Змінюємо homepage в package.json на свою в вс коді
7. Встановлюємо залежності npm i
8. Пушимо на гітхаб:
   - git commit -a
   - пишемо комент і тиснем esc
   - пишемо :wq і ентер
   - git push
9. Перевіряємо на гітхабі, коли запушилося - і робимо роздачу живої сторінки з
   gh-pages + додаємо посилання в шапку репа.
10. Ура!
