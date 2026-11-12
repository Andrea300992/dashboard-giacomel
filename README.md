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

## Stampa e PDF (dalla versione 1.2.0)

Ogni dashboard si può stampare o salvare in PDF **senza pulsanti aggiuntivi**, con due combinazioni di tasti:

| Tasti | Cosa fa |
|---|---|
| **Ctrl+Alt+P** | Apre l'anteprima di stampa a schermo (fogli A4 su sfondo grigio). **Esc** la chiude. |
| **Ctrl+P** (Cmd+P su Mac) | Apre la finestra di stampa del browser con la versione ottimizzata: da lì si stampa o si sceglie "Salva come PDF". |

La versione di stampa è pensata per risparmiare colore:
- formato **A4 verticale**, sfondo sempre bianco, senza sidebar, home e schermata finale;
- card, KPI e tabelle senza fondi colorati, solo bordi sottili e testo scuro; l'arancio resta solo su barre, linee e valori in evidenza;
- copertina con il periodo e l'indice dei capitoli; ogni capitolo inizia su una pagina nuova e nessun blocco viene spezzato tra due pagine;
- tabelle sempre complete (anche quelle che a schermo mostrano 6 righe), pulsanti nascosti;
- piè di pagina con "Fratelli Giacomel S.p.A. · periodo" e il numero di pagina.

Nota: nell'anteprima del Canvas di Gemini la finestra di stampa può essere bloccata. In quel caso scaricare l'HTML, aprirlo in Chrome e premere Ctrl+P.

## Firma e verifica

In ogni dashboard premere **Ctrl+Alt+A** per vedere versione del motore, autore e skill che ha generato i dati.
La firma è anche nel codice (`meta name="generator"`, attributi `data-engine` / `data-author`, console del browser).

## Controllo dei dati

Se un blocco ha dati non validi (es. riga di tabella con celle mancanti, numero scritto come testo),
il motore non disegna un grafico sbagliato: mostra un riquadro rosso con il capitolo, il blocco e il problema.
