import React from 'react'



const ScreeningAndConfirmatoryAnalysis = () => {
  return (
    <div className='max-w-3xl'>
      <svg className='rounded-xl mb-4' xmlns="http://www.w3.org/2000/svg" width="100%" height="200" viewBox="0 0 1000 200">
        <defs>
        <linearGradient id="bannerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6CB2E6" />
          <stop offset="100%" stop-color="#1565C0" />
        </linearGradient>
        </defs>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#bannerGradient)" />

        <circle cx="200" cy="100" r="50" fill="#5CB85C" fill-opacity="0.5" filter="url(#blur)" />
        <circle cx="400" cy="100" r="60" fill="#E74C3C" fill-opacity="0.5" filter="url(#blur)" />
        <circle cx="600" cy="100" r="70" fill="#F39C12" fill-opacity="0.5" filter="url(#blur)" />
        <circle cx="800" cy="100" r="80" fill="#34495E" fill-opacity="0.5" filter="url(#blur)" />
      </svg>
      <div class="space-y-2">
      <p className='text-sm badge'>Oprettet: 26/nov. '23</p>
        <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Screening og konfirmatorisk analyse</h1>
        <div className='flex gap-2 items-center pt-1 pb-4'>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>TB</span>
            </div>
          </div> 
          <div>
            <p className='text-sm'>Skrevet af Torben Breindahl</p> 
            <p className='text-sm'>Cand. scient.</p>
          </div>
        </div>
        <p class="text-lg text-muted-foreground">
          <span style={{display: "inline-block", verticalAlign: "top", textDecoration:" inherit", maxWidth:" 522px",}}>
          Internationale retningslinjer for laboratorier anbefaler brug af en to-trins strategi:
          </span>
        </p>
        <div className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span> 1) En indledende test udført ved <b> immunkemisk screening</b> under anvendelse af en
          tærskelværdi, en såkaldt 'cut-of' grænse på 50 ng/ml, som skiller positive fra negative prøver. 
          Denne teknik er relativt pålidelig, hurtig, prisbillig og nem at automatisere og kvalitetssikre. 
          Hvis den indledende screening er 'negativ',
          rapporteres dette resultat og yderligere analyser foretages ikke.</span>
        </div>
        <div className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span> 2) Hvis den indledende test er 'positiv', bekræftes eller verificeres resultatet med en konfirmatorisk analyseteknik. 
            Her benyttes <b>massespektrometri (MS) koblet til gas- eller væskekromatografi (GC eller LC)</b>, der kan betragtes som en referencemetode indenfor alle misbrugsanalyser.  
            Det er komplicerede, ressourcekrævende og ofte længerevarende analyser, som kun kan udføres af særligt uddannet personale og med brug af dyrt apparatur.
          </span>
        </div>
      </div>
      <div class="pb-12 pt-8">
        <p>
          Ved konfirmatoriske analyser anvendes også en fast 'cut-off' grænse, som gælder for en enkelt udvalgt kemisk forbindelse (ofte metabolit), der er særlig karakteristisk for stofgruppen. 
          For Cannabis har man valgt nedbrydningsproduktet <i>11-nor-Δ9-tetrahydrocannabinol-9-carboxylsyre</i> (forkortelse: THC-COOH). 
          Er resultatet lavere end 'cut-off' grænsen på 15 ng/ml rapporteres 'negativ' (se Tabel 1), uanset om stoffet tydeligt kan detekteres / identificeres, hvorved 'cut-off' grænsen i praksis virker som en 'bagatelgrænse'. 
          Bemærk at samme koncept anvendes ved dopinganalyser.
        </p>
        <div className='divider'/>
    </div>
    <div class="pb-12 pt-8">
      <h3 className='text-2xl '>Screenings- og konfirmatorisk cutoff matcher med hinanden</h3>
      <p>
      Der er ofte misforståelser omkring screeningens cutoff på 50 ng/ml og konfirmatorisk metode 'cutoff' på 15 ng/ml for Cannabis analyser. 
      Her skal man tænke på at der er mange forskellige cannabinoider fra Cannabis planten, som kan bindes til de antistoffer, som anvendes i reagenset, krydsreagere og påvirke screeningen. 
      Ved den konfirmatoriske metode, udvælges kun ét enkelt stof til analysen (THC-COOH). 
      For at matche screening og konfirmatorisk analyse, har man derfor valgt de forskellige 'cutoff' grænser.
      </p>
    </div>
    
  </div>
  )
}

export default ScreeningAndConfirmatoryAnalysis