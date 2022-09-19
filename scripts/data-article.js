const articleHome = document.createElement('div');
articleHome.className = "content-navTab";
articleHome.innerHTML = `
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="Notizie Ea" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 1.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">15-lug-2022</span></div>
            <h3>Orientamento sessuale in The Sims 4</h3>
            <p>Il nuovo aggiornamento integra l'orientamento sessuale in "Crea un Sim"</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 2.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">30-giu-2022</span></div>
            <h3>Visita guidata a Vita da Liceali Expansion Pack (EP12)</h3>
            <p>La lezione è iniziata in The Sims™ 4 Vita da Liceali Expansion Pack Vivete l'esperienza
                adolescenziale suprema a modo vostro</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 3.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">24-giu-2022</span></div>
            <h3>La salute dei dipendenti prima di tutto</h3>
            <p>Vogliamo ribadire il nostro incrollabile sostegno ai nostri dipendenti. La loro salute e
                il
                loro benessere sono la nostra priorità.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 4.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">3-giu-2022</span></div>
            <h3>Sosteniamo senza alcuna riserva dipendenti, utenti e comunità LGBTQ+.</h3>
            <p>Per la nostra azienda i diritti delle persone trans sono diritti umani. Sosteniamo senza
                alcuna riserva i nostri dipendenti, i nostri giocatori e le nostre comunità LGBTQ+.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 5.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">24-mag-2022</span></div>
            <h3>Pronomi personalizzabili ora disponibili in The Sims 4</h3>
            <p>Lancio dapprima in inglese - Ecco come personalizzare i pronomi dei Sims in "Crea un Sim"
            </p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Notizie EA/ea-notizie-immagine 6.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">19-lug-2022</span></div>
            <h3>EA Studios candidati come miglior ambiente di lavoro negli Stati Uniti</h3>
            <p>Respawn Entertainment, Maxis e Industrial Toys ottengono riconoscimenti da
                GamesIndustry.biz
            </p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/informazioni/news.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="EA Play" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-1.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">14-mag-2021</span></div>
            <h3>Gioca a Mass Effect™ Legendary Edition con EA Play* Pro</h3>
            <p>Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-2.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">3-mag-2021</span></div>
            <h3>Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS</h3>
            <p>FIFA 21 è ora disponibile in The Play List con EA Play.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-1.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">1-apr-2021</span></div>
            <h3>In evidenza su EA Play - Aprile 2021</h3>
            <p>Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-3.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">18-mar-2021</span></div>
            <h3>EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app</h3>
            <p>EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo
                unendo
                le nostre forze con Xbox per offrire più giochi agli utenti PC.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-1.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">1-mar-2021</span></div>
            <h3>In evidenza su EA Play - Marzo 2021</h3>
            <p>Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA
                Play Pro.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/EA Play/ea-play-immagine-1.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">25-feb-2021</span></div>
            <h3>EA Play – Prossimamente in The Play List – Primavera 2021</h3>
            <p>Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="FIFA" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 1.png" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">25-lug-2022</span></div>
            <h3>Juventus ed Electronic Arts - Annuncio partnership ufficiale</h3>
            <p>La Juventus fa il suo ritorno in EA SPORTS FIFA™ in occasione di FIFA 23 grazie a una
                nuova
                collaborazione pluriennale con Electronic Arts.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 2.jpg" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">20-lug-2022</span></div>
            <h3>Date d'uscita di EA SPORTS™ FIFA 23 - Sito ufficiale</h3>
            <p>Dai un'occhiata alle date d'uscita di FIFA 23</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 3-5.jpg" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">20-lug-2022</span></div>
            <h3>UN'OCCHIATA DA VICINO AL CROSS-PLAY IN FIFA 23 - EA SPORTS</h3>
            <p>Il cross-play consentirà di giocare con o contro amici e avversari su diverse piattaforme
                della stessa generazione in varie modalità di gioco online di FIFA 23.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 4.431p_" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">15-lug-2022</span></div>
            <h3>FUTTIES - FIFA 22 Ultimate Team - Sito ufficiale EA SPORTS</h3>
            <p>Scopri di più sui FUTTIES in FIFA 22 Ultimate Team.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 3-5.jpg" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">6-lug-2022</span></div>
            <h3>FIFA 22 | Note degli sviluppatori - Aggiornamento #14 - EA SPORTS</h3>
            <p>L'aggiornamento #14 sarà presto disponibile in FIFA 22 e introdurrà diverse novità per la
                fase difensiva e offensiva. Puoi consultare le note complete dell'aggiornamento qui. In
                questo articolo ci occuperemo di alcune delle p…</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/FIFA/ea-fifa-immagine 6.png" alt="">
        <div class="article-text">
            <div><span>FIFA</span><span class="normal">23-giu-2022</span></div>
            <h3>Ottieni il massimo da FIFA 22 con EA Play - Sito ufficiale EA SPORTS</h3>
            <p>FIFA 22 è ora disponibile in The Play List per gli abbonati a EA Play!</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="F1" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 1.jpg" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">25-lug-2022</span></div>
            <h3>Approfondimento sul modello di guida e sul force feedback</h3>
            <p>Scopri ulteriori informazioni dettagliate sulle modifiche della patch 1.06 al modello di
                guida e al force feedback</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 2.png" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">25-lug-2022</span></div>
            <h3>F1® 22 - Note sulla patch 1.06</h3>
            <p>Scopri di più sull'ultima patch</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 3.png" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">7-lug-2022</span></div>
            <h3>F1® 22 - Note sulla patch 1.05</h3>
            <p>Scopri di più sull'ultima patch</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 4.png" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">1-lug-2022</span></div>
            <h3>Approfondimento sulle valutazioni dei piloti nel database di F1® 22</h3>
            <p>Confronta le valutazioni dei piloti di F1® nel nostro database online aggiornato.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 5.png" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">28-giu-2022</span></div>
            <h3>Mettiti al volante: F1® 22 Champions Edition arriva oggi</h3>
            <p>Preparati a vivere il brivido delle corse: F1® 22 Champions Edition arriva oggi</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/F1/ea-f1-immagine 6.png" alt="">
        <div class="article-text">
            <div><span>F1® 22</span><span class="normal">27-lug-2022</span></div>
            <h3>Vivi F1® 22 in realtà virtuale</h3>
            <p>Mettiti al volante e guida come mai prima d'ora: gioca per la prima volta a F1® 22 in
                realtà
                virtuale</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="Apex Legends" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 1.jpg" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">21-lug-2022</span></div>
            <h3>Mostra a tutti il tuo sangue blu con il nuovo bundle di Wraith, Reale.</h3>
            <p>Ottieni gratuitamente la skin di Wraith Fiore letale e molto altro con il tuo abbonamento
                Prime dal 21 luglio al 18 agosto</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 2.jpg" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">15-lug-2022</span></div>
            <h3>Festeggia l'evento Gaiden con gli avatar VTuber di Apex Legends™</h3>
            <p>Unisciti al divertimento scaricando gli avatar VTuber di Octane, Bangalore e Mirage!</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 3.jpg" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">10-lug-2022</span></div>
            <h3>Inizia una nuova epica avventura nell'evento Gaiden</h3>
            <p>Il 19 luglio, evoca l'eroe che è in te con 40 avventurosi oggetti cosmetici in esclusiva
                con
                l'evento e il ritorno di Armati e pericolosi.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 4.png" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">5-lug-2022</span></div>
            <h3>TI DIAMO IL BENVENUTO ALLA SECONDA EDIZIONE DELL'ALGS CHAMPIONSHIP, 7-10 LU…</h3>
            <p>Ecco tutto quello che c'è da sapere sulla seconda edizione dell'ALGS Championship nella
                PNC
                Arena di Raleigh, Carolina del Nord!</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 5.jpg" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">16-giu-2022</span></div>
            <h3>Inizia l'estate con questo bundle di Gibraltar per Prime Gaming</h3>
            <p>Ottieni gratuitamente la skin di Gibraltar "Detto fatto" e molto altro con il tuo
                abbonamento
                Prime dal 16 giugno al 21 luglio</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Apex Legends/ea-apexLegends-immagine 6.jpg" alt="">
        <div class="article-text">
            <div><span>Apex Legends</span><span class="normal">16-giu-2022</span></div>
            <h3>Scegli la tua fazione, mech o mostri, nell'evento collezione Risveglio</h3>
            <p>Torna la modalità Controllo! Dai un'occhiata alla nuova area di Lifeline e molto altro
                con
                l'evento collezione Risveglio, il 21 giugno.</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="The Sims" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 1.jpg" alt="">
        <div class="article-text">
            <div><span>The Sims 4</span><span class="normal">26-lug-2022</span></div>
            <h3>Aggiornamento: 26/07/2022</h3>
            <p>Il liceo non finisce mai</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 2.png" alt="">
        <div class="article-text">
            <div><span>The Sims 4</span><span class="normal">19-lug-2022</span></div>
            <h3>Cose da fare - 19 luglio 2022</h3>
            <p>Cose da fare</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 3.jpg" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">15-lug-2022</span></div>
            <h3>Orientamento sessuale in The Sims 4</h3>
            <p>Il nuovo aggiornamento integra l'orientamento sessuale in "Crea un Sim"</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 4.png" alt="">
        <div class="article-text">
            <div><span>The Sims 4</span><span class="normal">1-lug-2022</span></div>
            <h3>Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori …</h3>
            <p>Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori di Depop</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 5.png" alt="">
        <div class="article-text">
            <div><span>Eletronics Arts Inc.</span><span class="normal">30-giu-2022</span></div>
            <h3>Visita guidata a Vita da Liceali Expansion Pack (EP12)</h3>
            <p>La lezione è iniziata in The Sims™ 4 Vita da Liceali Expansion Pack Vivete l'esperienza
                adolescenziale suprema a modo vostro</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/The Sims 4/ea-thesims-immagine 6.png" alt="">
        <div class="article-text">
            <div><span>The Sims 4</span><span class="normal">23-giu-2022</span></div>
            <h3>Consegne Express dei Sims</h3>
            <p>Aprile - Giugno 2022</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="Battlefield" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 1.431p_" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">5-lug-2022</span></div>
            <h3>AGGIORNAMENTO 1.1 DI BATTLEFIELD 2042</h3>
            <p>Aggiornamento 1.1 per Battlefield 2042, Stagione 1</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 2.431p_" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">10-giu-2022</span></div>
            <h3>Briefing su Battlefield - Benvenuti all'Ora zero</h3>
            <p>Battlefield 2042 – Stagione 1: Ora zero</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 3.png" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">6-giu-2022</span></div>
            <h3>AGGIORNAMENTO 1.0 DI BATTLEFIELD 2042</h3>
            <p>Aggiornamento 1.0 per la Stagione 1</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 4.431p_" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">24-mag-2022</span></div>
            <h3>Briefing Battlefield -- Aggiornamento sullo sviluppo, maggio 2022</h3>
            <p>Scoprite su cosa abbiamo lavorato in questo aggiornamento sullo sviluppo di Battlefield
                2042
            </p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 5.png" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">18-mag-2022</span></div>
            <h3>AGGIORNAMENTO 4.1 DI BATTLEFIELD 2042</h3>
            <p>Aggiornamenti alla rotazione di All-out warfare, modifiche al bilanciamento,
                miglioramenti
                all'esperienza di gioco e altro ancora nell'aggiornamento 4.1</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Battlefield/ea-battlefield-immagine 6.png" alt="">
        <div class="article-text">
            <div><span>Battlefield 2042</span><span class="normal">18-apr-2022</span></div>
            <h3>AGGIORNAMENTO 4.0 DI BATTLEFIELD 2042</h3>
            <p>Arriva la funzionalità VoIP, insieme a modifiche al bilanciamento, correzioni di bug e
                miglioramenti all'esperienza di gioco</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/manteinance/mantenaince.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
<div class="main-wrap">
<div class="main-content-wrap tabContent articles-standard" id="Inside EA" style="padding-top:60px" ;>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 1.jpg" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">1-apr-2022</span></div>
            <h3>La salute dei dipendenti prima di tutto</h3>
            <p>Vogliamo ribadire il nostro incrollabile sostegno ai nostri dipendenti. La loro salute e
                il
                loro benessere sono la nostra priorità.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 2.png" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">31-mar-2022</span></div>
            <h3>Lasciare un segno positivo all'interno e all'esterno dei nostri giochi</h3>
            <p>Lasciare un segno positivo all'interno e all'esterno dei nostri giochi</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 3.jpg" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">13-gen-2022</span></div>
            <h3>Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay</h3>
            <p>Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno
                dei
                titoli preferiti della serie</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 4.png" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">16-dic-2021</span></div>
            <h3>Dentro Full Circle – Melvin Teo, produttore di skate.</h3>
            <p>Scopri di più sullo studio Full Circle con Melvin Teo, produttore di skate.</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 5.jpg" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">2-nov-2021</span></div>
            <h3>ABLE festeggia il mese nazionale di sensibilizzazione sull'occupazione per …</h3>
            <p>È il momento di educare sui problemi di handicap e celebrare i numerosi e variegati
                contributi dei lavoratori con disabilità</p>
        </div>
    </a>
    <a href="/pages/manteinance/mantenaince.html" class="article-card">
        <img src="assets/images/article/Inside EA/ea-inside-immagine 6.png" alt="">
        <div class="article-text">
            <div><span>Inside EA</span><span class="normal">27-ott-2021</span></div>
            <h3>Rafforzare il nostro impegno in materia di accessibilità e inclusione</h3>
            <p>Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi
                che
                entrino in risonanza con tutti i giocatori.</p>
        </div>
    </a>
    <div class="main-content-wrap">
        <div class="content-details">
            <a class="details" href="/pages/informazioni/insideEA.html">
                <p>Più dettagli</p>
            </a>
        </div>
    </div>
</div>
</div>
`
const articleInsideEA = document.createElement('div');
articleInsideEA.className = "content-navTab";
articleInsideEA.innerHTML =`
        <div class="main-wrap tabContent" id="storie">
            <div class="main-content-wrap articles-standard container" amount="6" style="padding-top:60px" ;>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 1.jpg" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">21-lug-2022</span></div>
                        <h3>Mostra a tutti il tuo sangue blu con il nuovo bundle di Wraith, Reale.</h3>
                        <p>Ottieni gratuitamente la skin di Wraith Fiore letale e molto altro con il tuo abbonamento
                            Prime dal 21 luglio al 18 agosto</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 2.jpg" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">15-lug-2022</span></div>
                        <h3>Festeggia l'evento Gaiden con gli avatar VTuber di Apex Legends™</h3>
                        <p>Unisciti al divertimento scaricando gli avatar VTuber di Octane, Bangalore e Mirage!</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 3.jpg" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">10-lug-2022</span></div>
                        <h3>Inizia una nuova epica avventura nell'evento Gaiden</h3>
                        <p>Il 19 luglio, evoca l'eroe che è in te con 40 avventurosi oggetti cosmetici in esclusiva con
                            l'evento e il ritorno di Armati e pericolosi.</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 4.png" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">5-lug-2022</span></div>
                        <h3>TI DIAMO IL BENVENUTO ALLA SECONDA EDIZIONE DELL'ALGS CHAMPIONSHIP, 7-10 LU…</h3>
                        <p>Ecco tutto quello che c'è da sapere sulla seconda edizione dell'ALGS Championship nella PNC
                            Arena di Raleigh, Carolina del Nord!</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 5.jpg" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">16-giu-2022</span></div>
                        <h3>Inizia l'estate con questo bundle di Gibraltar per Prime Gaming</h3>
                        <p>Ottieni gratuitamente la skin di Gibraltar "Detto fatto" e molto altro con il tuo abbonamento
                            Prime dal 16 giugno al 21 luglio</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Apex Legends/ea-apexLegends-immagine 6.jpg" alt="">
                    <div class="article-text">
                        <div><span>Apex Legends</span><span class="normal">16-giu-2022</span></div>
                        <h3>Scegli la tua fazione, mech o mostri, nell'evento collezione Risveglio</h3>
                        <p>Torna la modalità Controllo! Dai un'occhiata alla nuova area di Lifeline e molto altro con
                            l'evento collezione Risveglio, il 21 giugno.</p>
                    </div>
                </a>
            </div>
            <div class="main-content-wrap">
                <div class="large-details btn">
                    <div class="l-details">
                        <svg>
                            <path d="M34.5,25.5h-6v-6c0-0.6-0.4-1-1-1 c-0.6,0-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h6v6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1 C35.5,25.9,35.1,25.5,34.5,25.5z"></path>
                            <path d="M27,54C12.1,54,0,41.9,0,27S12.1,0,27,0s27,12.1,27,27S41.9,54,27,54z M27,2 C13.2,2,2,13.2,2,27s11.2,25,25,25s25-11.2,25-25S40.8,2,27,2z"></path>
                        </svg>
                        <h2>Carica altro</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wrap tabContent" id="diversità">
            <div class="main-content-wrap articles-standard container" amount="6" style="padding-top:60px" ;>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 1.jpg" alt="">
                    <div class="article-text">
                        <div><span>The Sims 4</span><span class="normal">26-lug-2022</span></div>
                        <h3>Aggiornamento: 26/07/2022</h3>
                        <p>Il liceo non finisce mai</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 2.png" alt="">
                    <div class="article-text">
                        <div><span>The Sims 4</span><span class="normal">19-lug-2022</span></div>
                        <h3>Cose da fare - 19 luglio 2022</h3>
                        <p>Cose da fare</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 3.jpg" alt="">
                    <div class="article-text">
                        <div><span>Eletronics Arts Inc.</span><span class="normal">15-lug-2022</span></div>
                        <h3>Orientamento sessuale in The Sims 4</h3>
                        <p>Il nuovo aggiornamento integra l'orientamento sessuale in "Crea un Sim"</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 4.png" alt="">
                    <div class="article-text">
                        <div><span>The Sims 4</span><span class="normal">1-lug-2022</span></div>
                        <h3>Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori …</h3>
                        <p>Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori di Depop</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 5.png" alt="">
                    <div class="article-text">
                        <div><span>Eletronics Arts Inc.</span><span class="normal">30-giu-2022</span></div>
                        <h3>Visita guidata a Vita da Liceali Expansion Pack (EP12)</h3>
                        <p>La lezione è iniziata in The Sims™ 4 Vita da Liceali Expansion Pack Vivete l'esperienza
                            adolescenziale suprema a modo vostro</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/The Sims 4/ea-thesims-immagine 6.png" alt="">
                    <div class="article-text">
                        <div><span>The Sims 4</span><span class="normal">23-giu-2022</span></div>
                        <h3>Consegne Express dei Sims</h3>
                        <p>Aprile - Giugno 2022</p>
                    </div>
                </a>
            </div>
            <div class="main-content-wrap">
                <div class="large-details btn">
                    <div class="l-details">
                        <svg>
                            <path d="M34.5,25.5h-6v-6c0-0.6-0.4-1-1-1 c-0.6,0-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h6v6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1 C35.5,25.9,35.1,25.5,34.5,25.5z"></path>
                            <path d="M27,54C12.1,54,0,41.9,0,27S12.1,0,27,0s27,12.1,27,27S41.9,54,27,54z M27,2 C13.2,2,2,13.2,2,27s11.2,25,25,25s25-11.2,25-25S40.8,2,27,2z"></path>
                        </svg>
                        <h2>Carica altro</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wrap tabContent" id="cultura">
            <div class="main-content-wrap articles-standard container" amount="6" style="padding-top:60px" ;>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 1.431p_" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">5-lug-2022</span></div>
                        <h3>AGGIORNAMENTO 1.1 DI BATTLEFIELD 2042</h3>
                        <p>Aggiornamento 1.1 per Battlefield 2042, Stagione 1</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 2.431p_" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">10-giu-2022</span></div>
                        <h3>Briefing su Battlefield - Benvenuti all'Ora zero</h3>
                        <p>Battlefield 2042 – Stagione 1: Ora zero</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 3.png" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">6-giu-2022</span></div>
                        <h3>AGGIORNAMENTO 1.0 DI BATTLEFIELD 2042</h3>
                        <p>Aggiornamento 1.0 per la Stagione 1</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 4.431p_" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">24-mag-2022</span></div>
                        <h3>Briefing Battlefield -- Aggiornamento sullo sviluppo, maggio 2022</h3>
                        <p>Scoprite su cosa abbiamo lavorato in questo aggiornamento sullo sviluppo di Battlefield 2042
                        </p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 5.png" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">18-mag-2022</span></div>
                        <h3>AGGIORNAMENTO 4.1 DI BATTLEFIELD 2042</h3>
                        <p>Aggiornamenti alla rotazione di All-out warfare, modifiche al bilanciamento, miglioramenti
                            all'esperienza di gioco e altro ancora nell'aggiornamento 4.1</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Battlefield/ea-battlefield-immagine 6.png" alt="">
                    <div class="article-text">
                        <div><span>Battlefield 2042</span><span class="normal">18-apr-2022</span></div>
                        <h3>AGGIORNAMENTO 4.0 DI BATTLEFIELD 2042</h3>
                        <p>Arriva la funzionalità VoIP, insieme a modifiche al bilanciamento, correzioni di bug e
                            miglioramenti all'esperienza di gioco</p>
                    </div>
                </a>
            </div>
            <div class="main-content-wrap">
                <div class="large-details btn">
                    <div class="l-details">
                        <svg>
                            <path d="M34.5,25.5h-6v-6c0-0.6-0.4-1-1-1 c-0.6,0-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h6v6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1 C35.5,25.9,35.1,25.5,34.5,25.5z"></path>
                            <path d="M27,54C12.1,54,0,41.9,0,27S12.1,0,27,0s27,12.1,27,27S41.9,54,27,54z M27,2 C13.2,2,2,13.2,2,27s11.2,25,25,25s25-11.2,25-25S40.8,2,27,2z"></path>
                        </svg>
                        <h2>Carica altro</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wrap tabContent" id="comunità">
            <div class="main-content-wrap articles-standard container" amount="6" style="padding-top:60px" ;>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 1.jpg" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">1-apr-2022</span></div>
                        <h3>La salute dei dipendenti prima di tutto</h3>
                        <p>Vogliamo ribadire il nostro incrollabile sostegno ai nostri dipendenti. La loro salute e il
                            loro benessere sono la nostra priorità.</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 2.png" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">31-mar-2022</span></div>
                        <h3>Lasciare un segno positivo all'interno e all'esterno dei nostri giochi</h3>
                        <p>Lasciare un segno positivo all'interno e all'esterno dei nostri giochi</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 3.jpg" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">13-gen-2022</span></div>
                        <h3>Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay</h3>
                        <p>Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno dei
                            titoli preferiti della serie</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 4.png" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">16-dic-2021</span></div>
                        <h3>Dentro Full Circle – Melvin Teo, produttore di skate.</h3>
                        <p>Scopri di più sullo studio Full Circle con Melvin Teo, produttore di skate.</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 5.jpg" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">2-nov-2021</span></div>
                        <h3>ABLE festeggia il mese nazionale di sensibilizzazione sull'occupazione per …</h3>
                        <p>È il momento di educare sui problemi di handicap e celebrare i numerosi e variegati
                            contributi dei lavoratori con disabilità</p>
                    </div>
                </a>
                <a href="/pages/manteinance/mantenaince.html" class="article-card">
                    <img src="/assets/images/article/Inside EA/ea-inside-immagine 6.png" alt="">
                    <div class="article-text">
                        <div><span>Inside EA</span><span class="normal">27-ott-2021</span></div>
                        <h3>Rafforzare il nostro impegno in materia di accessibilità e inclusione</h3>
                        <p>Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi che
                            entrino in risonanza con tutti i giocatori.</p>
                    </div>
                </a>
            </div>
            <div class="main-content-wrap">
                <div class="large-details btn">
                    <div class="l-details">
                        <svg>
                            <path d="M34.5,25.5h-6v-6c0-0.6-0.4-1-1-1 c-0.6,0-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h6v6c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1 C35.5,25.9,35.1,25.5,34.5,25.5z"></path>
                            <path d="M27,54C12.1,54,0,41.9,0,27S12.1,0,27,0s27,12.1,27,27S41.9,54,27,54z M27,2 C13.2,2,2,13.2,2,27s11.2,25,25,25s25-11.2,25-25S40.8,2,27,2z"></path>
                        </svg>
                        <h2>Carica altro</h2>
                    </div>
                </div>
            </div>
        </div>
`