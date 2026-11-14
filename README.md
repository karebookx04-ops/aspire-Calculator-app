# Aspire Enterprises Seller App

Standalone version of the Aspire seller calculator: profit calculator, products, khata (party ledger), stock, GST bills, launch plan.

## Files
- `index.html` : the app (built file, do not edit by hand)
- `src/aspire-calc.html` : calculator source (same file that is published as the Claude artifact)
- `src/shell.html` : page shell with login and the data layer (Firebase or demo mode)
- `build.py` : `python3 build.py` rebuilds `index.html` from `src/`
- `config.js` : Firebase web config. `null` = demo mode (data only in the browser)
- `firestore.rules` : database rules, each user can only touch `users/{uid}/...`
- `manifest.webmanifest`, `icons/` : lets the phone install it like an app

## Going live (one time)
1. Firebase console: create a project, add a Web app, copy its config into `config.js`.
2. Authentication: enable Email/Password. Create the owner account, then turn off new sign-ups if only the owner should log in.
3. Firestore Database: create it (production mode, region asia-south1), paste `firestore.rules` into Rules and publish.
4. Host the folder as a static site (GitHub Pages works: Settings > Pages > deploy from branch, root).
5. Optional: point a custom domain at the site.

## Moving data from the Claude calculator
In the old calculator: Khata > "Backup file download". In this app: Khata > "Backup se restore" and pick that file. Khata, stock, calculator numbers, launch plan, bills and firm details come across.

## Data layout (Firestore)
`users/{uid}/` then: `parties`, `purchases`, `payments`, `sales`, `adjustments`, `trash`, `backups`, `invoices`, `settings/seller`, `plan/steps`, `calc/main`.
