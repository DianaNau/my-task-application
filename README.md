# My Tasks App 📝  

Hey! 👋 Ich bin Diana und das ist mein erstes Angular-Projekt.  
Mit dieser App lassen sich Aufgaben ganz einfach verwalten – man kann sie hinzufügen, als erledigt markieren, löschen und nach Status filtern (Alle, Erledigt, Offen). Die Daten werden dabei im Local Storage gespeichert, sodass auch nach dem Neuladen der Seite nichts verloren geht.  

Das Projekt wurde mit Angular (Standalone-Komponenten), TypeScript, HTML und CSS umgesetzt. Besonderen Wert habe ich auf eine klare Struktur, ein responsives Design und eine gute Benutzerfreundlichkeit gelegt. Die Oberfläche passt sich automatisch an Desktop- und Mobilgeräte an.

Ich habe dieses Projekt im Rahmen einer Coding Challenge zur Vorbereitung auf ein Praktikum bei der Firma Serviceware entwickelt – deshalb habe ich auch das Logo in das Design eingebunden, um einen persönlichen Bezug zu schaffen.

Die Anwendung ist in zwei Komponenten aufgeteilt:  
Eine zum Hinzufügen neuer Aufgaben (`AddTaskComponent`) und eine zur Anzeige und Verwaltung der Aufgabenliste (`TaskListComponent`). Die Logik zur Datenverarbeitung befindet sich im `TaskService`, wo alle Aufgaben zentral gespeichert, aktualisiert und mit einem `BehaviorSubject` an die UI weitergegeben werden.  

Die Filterfunktion ermöglicht es, zwischen allen, erledigten und offenen Aufgaben zu wechseln. Dabei wird die jeweils gefilterte Liste dynamisch angepasst. Für die Speicherung verwende ich ausschließlich den Local Storage – ohne Datenbank oder Backend.

Ich habe dieses Projekt genutzt, um Angular von Grund auf besser zu verstehen. Es war mir wichtig, etwas Eigenes zu bauen, das nicht nur technisch funktioniert, sondern auch visuell einen sauberen und aufgeräumten Eindruck macht.

Vielen Dank für die Challenge! 😄

