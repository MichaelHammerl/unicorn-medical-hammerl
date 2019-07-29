# Annahmen und Erklärungen

- Gegebener Code wurde möglichst unverändert belassen.
- Auf weitere externe Bibliotheken wurde verzichtet.
- Für die 3 Container wurde die Komponente `DashboardContainer` erstellt.
- Die Besonderheiten im letzten Container wurden durch die Nutzung von `ng-content` umgesetzt. 
  Die dadurch an die Liste angefügten Elemente werden mit Hilfe von CSS (`order`) in die richtige Reihenfolge gebracht.
  Ich hoffe, der kleine Trick war erlaubt :)

Relevante Dateien, die geändert/erstellt wurden:
```
./src/app/core/search.service.ts
./src/app/dashboard/dashboard.component.ts
./src/app/dashboard/dashboard.component.html
./src/app/dashboard-container/dashboard-container.component.ts
./src/app/dashboard-container/dashboard-container.component.html
./src/app/shuffle.pipe.ts
./src/assets/sass/_custom.scss
```
