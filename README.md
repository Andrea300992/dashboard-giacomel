# Dashboard Giacomel – motore grafico

Motore grafico delle dashboard mensili di marketing di Fratelli Giacomel.

**Developed by Andrea Carminati** · © 2026 Andrea Carminati. All rights reserved.

## Come funziona

Le dashboard generate dalla skill di Gemini contengono **solo i dati** (l'oggetto `DASHBOARD`).
Tutta la parte grafica (stile, grafici, tabelle, navigazione) è in `motore.js`, caricato da qui:

```html
<script>
const DASHBOARD = { period: "...", tabs: [ ... ] };
</script>
<script src="https://andrea300992.github.io/dashboard-giacomel/motore.js" onerror="this.onerror=null;var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/Andrea300992/dashboard-giacomel@main/motore.js';document.body.appendChild(s)"></script>
```

Se GitHub Pages non risponde, la stessa riga carica il motore dalla copia su jsDelivr (stesso file, stesso repository).

- `motore.js` è sempre l'ultima versione: correggerlo qui aggiorna tutte le dashboard.
- `versioni/` contiene le copie fisse di ogni versione rilasciata, per poter tornare indietro.
- `index.html` è una dashboard dimostrativa con **dati inventati**.

## Regole per aggiornare il motore

1. Si aggiunge, non si toglie: niente tipi di blocco o campi rimossi o rinominati, così le dashboard dei mesi passati continuano a funzionare.
2. Ogni rilascio aumenta la versione in `motore.js` e salva una copia in `versioni/`.
3. In questo repository non vanno mai caricati dati reali dell'azienda.

## Firma e verifica

In ogni dashboard premere **Ctrl+Alt+A** per vedere versione del motore, autore e skill che ha generato i dati.
La firma è anche nel codice (`meta name="generator"`, attributi `data-engine` / `data-author`, console del browser).

## Controllo dei dati

Se un blocco ha dati non validi (es. riga di tabella con celle mancanti, numero scritto come testo),
il motore non disegna un grafico sbagliato: mostra un riquadro rosso con il capitolo, il blocco e il problema.
