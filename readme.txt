berry angular template

Add new url in nav 
  1. ng g c history --standalone --dry-run
  2. ng g c history --standalone 
  3. Import shared module in newly created component. 
     Example code is below.
     import { SharedModule } from 'src/app/theme/shared/shared.module';
  4. Add app-card.
     <app-card  cardTitle="History">
        <p>history works!</p>
     </app-card>
  5. Add shared module in imports array of newly created component.
  6. Add default keyword in component like below.
     export default class HistoryComponent { 
 
          

DataTables 
https://blog.logrocket.com/angular-datatables-feature-rich-tables/ 