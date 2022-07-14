

**immagini** Come nominarle: 

    -Dei giochi (gioco e logo): nomegioco.ext
                                nomegioco-logo.ext
        Per nomegioco si intende il nome completo di espansione (se è un'espansione)
        Ext sta per estensione del file

    -Degli hero: h - numero hero della pagina - larghezza x altezza . estensione
                 h-1-n1xn2.ext
                 h-1-n3xn4.ext ecc ecc
                 h-2-n1xn2.ext
                 h-2-n3xn4.ext ecc ecc 

    -Altre: autogestite, mantenendo un sistema che permetta di lavorarci facilmente

**Moduli** Per ora si producono in css. Con Patrizio vedremo se cambiare.
    I moduli sono nominati così: im-nomemodulo.css (im sta per import)

**Colori** Hanno un loro modulo in cui posizionarli con le custom properties

**Tipografia** Ha un suo modulo in cui inserire font e dimensioni con le custom properties

**Import html** L'import di parti html è in fase di ricerca. per ora manteniamo su pagine dedicate header e footer (chi li vuole utilizzare può copiarli, poi aggiornerà il codice quando avremo risolto)

**Commit** Se si è modificato un solo file inserirlo nel commento. Es. `Feat(nomefile.ext): ecc ecc`
    Se sono più file ometterlo ed inserire tutto nella descrizione.
    Inoltre, creare una descrizione quando il titolo non basta a spiegare tutto.

**Pull request**    -`Aggiornare il proprio ramo prima di fare la pull request`.
                    -Una pull request con conflitti sarà respinta o sospesa.
                    -Se siete in coda è probabile che dovrete aggiornarvi più volte prima che venga  accettata. (abbiate pazienza 🙏)
        

.       Procedimento per aggiornare il ramo:
            -Farlo in un momento di calma, piuttosto che farlo di fretta si posticipa
            -Posizionarsi su `develop` e dare `git pull`
            -Posizionarsi sul `proprio ramo` col lavoro completato e dare `git merge develop`
            -Se ci sono conflitti:
                *Risolvere con attenzione i conflitti di tutti i file che ne presentano
                *A volte non basta accettare una delle due versioni proposte, ma serve editare quella che accetteremo
                *Se si hanno dubbi su cosa modificare, dare `git merge --abort` (annullare il merge) e chiedere informazioni agli interessati, per poi ripetere l'operazione
                *Controllare dall'inizio alla fine del documento che sia tutto risolto
                *Salvare e chiudere il file
                *Creare il commit di merge (se ci sono conflitti non si crea da solo)
            -Sempre dal proprio ramo dare `git push` (se non esiste ancora in remoto `git push -u origin nomebranch`)
            -Spostarsi su GitHub tramite il link col nomebranch restituito nel terminale (ctrl+click sinistro) spostarsi su GitHub
                Usando questo link si arriva direttamente alla pull request su GitHub, altrimenti arrivarci come si preferisce
            -assicurarsi dei essere sulla pull request del proprio ramo
            -`Selezionare develop` come destinazione (base)
            -Creare la pull request
            -`Non accettarla da soli`, deve mergiare il revisore



