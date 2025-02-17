import { useState } from 'react'

import Cast from '../components/Cast';
import Header from '../components/Header';
import Provider from '../components/Provider';
import { colorBackground } from '../utils/colors';

import { BsBookmarkPlusFill } from "react-icons/bs";
import Similar from '../components/Similar';

const Movie = () => {
    const [active, setActive] = useState(true);

    const providers = [
        {
            nome: 'Netflix',
            img: 'https://images.justwatch.com/icon/207360008/s100/netflix.jpeg'
        },
        {
            nome: 'GloboPlay',
            img: 'https://images.justwatch.com/icon/270278212/s100/globoplay.jpeg'
        }
    ]

    const cast = [
        {
            name: "Audrey Hepburn",
            profile_path: "/nbkNJ8dr6j5vSZ3M6SKwp0F7Q1P.jpg",
            character: "Jo Stockton",
            order: 0
        },
        {
            name: "Fred Astaire",
            profile_path: "/6gw9PCrKi19I5QOwjEPaOYW9uLI.jpg",
            character: "Dick Avery",
            order: 1
        },
        {
            name: "Kay Thompson",
            profile_path: "/bFNq0fWlid7kOCpj3VDVtazgWXH.jpg",
            character: "Maggie Prescott",
            order: 3
        }
    ]

    const similar =  [
          {
            "adult": false,
            "backdrop_path": "/bud4H3I6X9b9HIcilAb33k6mNES.jpg",
            "genre_ids": [
              10402,
              35,
              10749
            ],
            "id": 29376,
            "original_language": "en",
            "original_title": "The Band Wagon",
            "overview": "Tony Hunter, famoso astro do cinema musical, teme que sua carreira esteja no fim, mas seus amigos Lester e Lily escrevem um pequeno show na Broadway para ajudá-lo. Tony fica entusiasmado, e até o diretor egoísta, Jeffrey Cordova, junta-se ao projeto e lança a bailarina Gaby Gerard como protagonista. A segunda chance de Tony parece estar desaparecendo, mas ele pode conseguir muito mais do que esperava.",
            "popularity": 11.149,
            "poster_path": "/gYINlLGUVcqPsb7VxCy8zEMhbq0.jpg",
            "release_date": "1953-08-07",
            "title": "A Roda da Fortuna",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 209
          },
          {
            "adult": false,
            "backdrop_path": "/yf8Ct7WikW3TlgGlrMoCsCn7YBY.jpg",
            "genre_ids": [
              10749,
              10402
            ],
            "id": 29380,
            "original_language": "en",
            "original_title": "Easter Parade",
            "overview": "Um artista de nightclub contrata uma ingênua Menina do Coro para ser sua nova parceira de dança para deixar sua ex-parceira ciumenta e para provar que ele pode transformar qualquer parceira em uma estrela.  Na véspera da Páscoa em 1911, Don Hewes é surpreendido quando sua parceira de dança (e também sua paixão) Nadine Hale se recusa a renovar o contrato com ele. Para provar que Nadine não é importante para ele, Don contrata uma ingênua Menina do Coro, Hannah Brown, prometendo fazer dela uma estrela a tempo para o desfile de Páscoa do próximo ano. Cheio de Melodia! Cheio de Amor!",
            "popularity": 7.335,
            "poster_path": "/aLgvafQvb6D6at4khC0b7kn0h8f.jpg",
            "release_date": "1948-07-08",
            "title": "Desfile de Páscoa",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 140
          },
          {
            "adult": false,
            "backdrop_path": "/s149PRSj72YC8448PZZ7dFBTiHH.jpg",
            "genre_ids": [
              18,
              10402
            ],
            "id": 29395,
            "original_language": "en",
            "original_title": "Brave",
            "overview": "",
            "popularity": 0.734,
            "poster_path": "/jnoDSGhaYbwHqPfQsgNRgUkLAHC.jpg",
            "release_date": "1994-01-01",
            "title": "Brave",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 3
          },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/vMR82gBG088fYkpLQfk7VD6YsoK.jpg",
        //     "genre_ids": [
        //       878,
        //       35
        //     ],
        //     "id": 29420,
        //     "original_language": "en",
        //     "original_title": "Cinderella 2000",
        //     "overview": "‎No ano de 2047, o sexo é proibido e o Big Brother usa robôs para ficar de olho em todos. Uma jovem tenta enganar o governo para que ela possa ficar com o homem que ama.‎",
        //     "popularity": 4.825,
        //     "poster_path": "/pL2nAxPeHv65NolZrx78KQRqZZA.jpg",
        //     "release_date": "1977-05-13",
        //     "title": "Cinderella 2000",
        //     "video": false,
        //     "vote_average": 3.2,
        //     "vote_count": 18
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/iYLKMV7PIBtFmtygRrhSiyzcVsF.jpg",
        //     "genre_ids": [
        //       12,
        //       35,
        //       10751,
        //       16
        //     ],
        //     "id": 277834,
        //     "original_language": "en",
        //     "original_title": "Moana",
        //     "overview": "Moana Waialiki é uma corajosa jovem, filha do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Querendo descobrir mais sobre seu passado e ajudar a família, ela resolve partir em busca de seus ancestrais, habitantes de uma ilha mítica que ninguém sabe onde é. Acompanhada pelo lendário semideus Maui, Moana começa sua jornada em mar aberto, onde enfrenta terríveis criaturas marinhas e descobre histórias do submundo.",
        //     "popularity": 42.084,
        //     "poster_path": "/qgDYSh9oRMNUS0ldxJLJtFGSGMK.jpg",
        //     "release_date": "2016-10-13",
        //     "title": "Moana: Um Mar de Aventuras",
        //     "video": false,
        //     "vote_average": 7.565,
        //     "vote_count": 12865
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       10402,
        //       10770
        //     ],
        //     "id": 958934,
        //     "original_language": "pl",
        //     "original_title": "Koncert na 707 ulic",
        //     "overview": "",
        //     "popularity": 0.321,
        //     "poster_path": null,
        //     "release_date": "1969-02-16",
        //     "title": "Koncert na 707 ulic",
        //     "video": false,
        //     "vote_average": 6,
        //     "vote_count": 1
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/mflUcwbpLQ6IBUj6Ar0Imd4gb3t.jpg",
        //     "genre_ids": [
        //       35
        //     ],
        //     "id": 28789,
        //     "original_language": "en",
        //     "original_title": "Never Give a Sucker an Even Break",
        //     "overview": "",
        //     "popularity": 1.942,
        //     "poster_path": "/dHCpKHEBfSGygsZ54RnDOh5s8Ky.jpg",
        //     "release_date": "1941-10-10",
        //     "title": "Never Give a Sucker an Even Break",
        //     "video": false,
        //     "vote_average": 6.786,
        //     "vote_count": 35
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/8ZSLYu0UsWrbuPBbBncQvO3ZPMT.jpg",
        //     "genre_ids": [
        //       35
        //     ],
        //     "id": 28878,
        //     "original_language": "es",
        //     "original_title": "Humor dulce hogar",
        //     "overview": "",
        //     "popularity": 1.082,
        //     "poster_path": "/cBSbPiSMCy9xs05AZUX65lkbvIR.jpg",
        //     "release_date": "1986-01-02",
        //     "title": "Humor dulce hogar",
        //     "video": true,
        //     "vote_average": 7.8,
        //     "vote_count": 7
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       35
        //     ],
        //     "id": 28884,
        //     "original_language": "es",
        //     "original_title": "Viejos Fracasos",
        //     "overview": "",
        //     "popularity": 0.759,
        //     "poster_path": "/gVuGeurYrLnyiu6rRPbPeq68wYE.jpg",
        //     "release_date": "1977-01-02",
        //     "title": "Viejos Fracasos",
        //     "video": true,
        //     "vote_average": 4.2,
        //     "vote_count": 2
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/uce77WMOY76zDnKoIEC7wYfHmW6.jpg",
        //     "genre_ids": [
        //       10402,
        //       35
        //     ],
        //     "id": 607181,
        //     "original_language": "en",
        //     "original_title": "Kinky Boots: The Musical",
        //     "overview": "",
        //     "popularity": 6.449,
        //     "poster_path": "/20QfQHWGw0ZSfYaSinnsJoiVZCd.jpg",
        //     "release_date": "2019-06-25",
        //     "title": "Kinky Boots: The Musical",
        //     "video": false,
        //     "vote_average": 7.9,
        //     "vote_count": 56
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/mJzTDzXKsa8sFzv6AfIcQgNPtFL.jpg",
        //     "genre_ids": [
        //       10402,
        //       35
        //     ],
        //     "id": 29289,
        //     "original_language": "en",
        //     "original_title": "Crazy House",
        //     "overview": "",
        //     "popularity": 2.617,
        //     "poster_path": "/dw5zTOfjvEUIg5HuemYwLqAgNo8.jpg",
        //     "release_date": "1943-10-08",
        //     "title": "Crazy House",
        //     "video": false,
        //     "vote_average": 5,
        //     "vote_count": 3
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       35
        //     ],
        //     "id": 606555,
        //     "original_language": "fr",
        //     "original_title": "Fuck les gars",
        //     "overview": "",
        //     "popularity": 0.649,
        //     "poster_path": "/rRbQTvfTuT28OKto6TJL1CcH6aL.jpg",
        //     "release_date": "2019-02-15",
        //     "title": "Fuck les gars",
        //     "video": false,
        //     "vote_average": 10,
        //     "vote_count": 1
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       10402
        //     ],
        //     "id": 447744,
        //     "original_language": "en",
        //     "original_title": "National Theatre Live: Fela!",
        //     "overview": "",
        //     "popularity": 0.223,
        //     "poster_path": "/cZgnPuB2KsRyWPdhh3jnrTBNhE4.jpg",
        //     "release_date": "2011-01-13",
        //     "title": "National Theatre Live: Fela!",
        //     "video": true,
        //     "vote_average": 0,
        //     "vote_count": 0
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
        //     "genre_ids": [
        //       12,
        //       10751,
        //       14,
        //       10749
        //     ],
        //     "id": 447277,
        //     "original_language": "en",
        //     "original_title": "The Little Mermaid",
        //     "overview": "Ariel é uma curiosa sereia que deseja experimentar a vida em terra firme e, contra a vontade de seu pai, visita a superfície. Ariel se vê em uma inesperada jornada de autodescoberta ao encontrar um príncipe, uma bruxa do mar e um novo mundo incrível.",
        //     "popularity": 76.327,
        //     "poster_path": "/yeo0MKX2cAE0Ge7qoeRCiMWvSjV.jpg",
        //     "release_date": "2023-05-18",
        //     "title": "A Pequena Sereia",
        //     "video": false,
        //     "vote_average": 6.3,
        //     "vote_count": 2994
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       35,
        //       10402
        //     ],
        //     "id": 447318,
        //     "original_language": "en",
        //     "original_title": "Portal 2: The (Unauthorized) Musical",
        //     "overview": "",
        //     "popularity": 0.431,
        //     "poster_path": "/pWfVr1zW18W925AgV5qs84KVhoB.jpg",
        //     "release_date": "2017-03-04",
        //     "title": "Portal 2: The (Unauthorized) Musical",
        //     "video": false,
        //     "vote_average": 0,
        //     "vote_count": 0
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/tc3YA7KqF3JeQZ0NanA4GGEHdVv.jpg",
        //     "genre_ids": [
        //       35,
        //       10402
        //     ],
        //     "id": 786885,
        //     "original_language": "sv",
        //     "original_title": "30-årsfesten - Scenversionen",
        //     "overview": "",
        //     "popularity": 0.114,
        //     "poster_path": "/y7HxwnnwQ7qyMAiKKw8c8PfWE9s.jpg",
        //     "release_date": "2015-10-19",
        //     "title": "30-årsfesten - Scenversionen",
        //     "video": false,
        //     "vote_average": 7,
        //     "vote_count": 3
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/lraknsIRsxNE38469HayRlmM8Lm.jpg",
        //     "genre_ids": [
        //       35,
        //       10749
        //     ],
        //     "id": 29885,
        //     "original_language": "en",
        //     "original_title": "The Barkleys of Broadway",
        //     "overview": "Josh e Dinah Barkley formam um casal de sucesso, especializado em comédias musicais. É verdade que eles têm lá suas desavenças, mas nada muito sério. Entretanto, quando um empresário cisma que Dinah pode ser uma grande atriz dramática -- e ela se deixa convencer --, a casa vem abaixo...",
        //     "popularity": 4.475,
        //     "poster_path": "/26DrCLhuLo10xYRYa34vsDhXxSL.jpg",
        //     "release_date": "1949-05-04",
        //     "title": "Ciume, Sinal de Amor",
        //     "video": false,
        //     "vote_average": 6.8,
        //     "vote_count": 47
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/evWh4g2bh4HlptTgtbhGtbPp5cr.jpg",
        //     "genre_ids": [
        //       10402
        //     ],
        //     "id": 29719,
        //     "original_language": "en",
        //     "original_title": "Jean-Michel Jarre - Aero",
        //     "overview": "",
        //     "popularity": 0.876,
        //     "poster_path": "/gEIExFuqYMzF4s0WQigmW2Y7cCU.jpg",
        //     "release_date": "2005-07-19",
        //     "title": "Jean-Michel Jarre - Aero",
        //     "video": true,
        //     "vote_average": 6,
        //     "vote_count": 1
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": null,
        //     "genre_ids": [
        //       10402,
        //       18,
        //       35
        //     ],
        //     "id": 278882,
        //     "original_language": "uz",
        //     "original_title": "Маҳаллада дув-дув гап",
        //     "overview": "",
        //     "popularity": 1.312,
        //     "poster_path": "/rAjx6g2BRNAzNeD2YyTNKRXzqe5.jpg",
        //     "release_date": "1960-08-01",
        //     "title": "Маҳаллада дув-дув гап",
        //     "video": false,
        //     "vote_average": 4,
        //     "vote_count": 4
        //   },
        //   {
        //     "adult": false,
        //     "backdrop_path": "/wiE6pVfNwm1BbXjtFQfOwRFI5xy.jpg",
        //     "genre_ids": [
        //       10402,
        //       35,
        //       10749
        //     ],
        //     "id": 278886,
        //     "original_language": "az",
        //     "original_title": "Arşın mal alan",
        //     "overview": "",
        //     "popularity": 1.434,
        //     "poster_path": "/fYugwxjJnMNUwFZrD0GrMLozFnA.jpg",
        //     "release_date": "1945-10-01",
        //     "title": "Arşın mal alan",
        //     "video": false,
        //     "vote_average": 6.5,
        //     "vote_count": 5
        //   }
    ]
    
    
    return (
        <div className={`w-screen h-screen bg-background flex ${active ? 'justify-star' : 'justify-center'} items-center`}>
            {
                !active
                ?
                    <h1 className='font-bold text-white'>Carregando...</h1>
                :
                    <>
                        <div className='w-full h-lvh flex flex-col justify-star overflow-x-hidden'>
                            <Header />
                            <div className='row-span-13 size-full flex justify-center items-center relative'>
                                <div className='grid grid-rows-4 w-full h-full xl:pt-5 absolute'>
                                    <div className='row-span-3 relative'>
                                        <img className='absolute size-full' src='https://image.tmdb.org/t/p/original/Ezr1StPIK9xMqXeTNBXbrnbgu4.jpg'/>
                                        <div className='absolute size-full bg-linear-to-b from-transparent to-background' />
                                    </div>
                                    <div className='bg-background size-full flex justify-center'/>
                                </div>
                                <div className='absolute bg-background flex flex-row w-[75%] xl:mt-440 2xl:mt-425 rounded-t-lg py-8 px-10 xl:px-8 xl:gap-10'>
                                    <div className='w-[30%] flex flex-col justify-star items-center'>
                                        <img className='w-3xs h-[24rem] rounded-sm' alt='Poster Funny Face' src='https://image.tmdb.org/t/p/original/1CW8Wn2itBQ7wACBQHpOyIbPpmD.jpg' />
                                        <div className='w-3xs flex justify-center py-2 gap-3'>
                                            <div className='flex flex-row justify-center items-center gap-1'>
                                                <img className='size-[1rem]' src='/public/letterboxd-logo-dark.svg'/>
                                                <span className='font-roboto font-thin text-sm text-[#ddeeff]'>3.7</span>
                                            </div>
                                            <div className='flex flex-row justify-center items-center gap-1'>
                                                <img className='h-[0.9rem]' src='/public/imdb_logo-unique.svg'/>
                                                <span className='font-roboto font-thin text-sm text-[#ddeeff]'>7.0</span>
                                            </div>
                                            <div className='flex flex-row justify-center items-center gap-1'>
                                                <img className='size-[1rem]' src='/public/rotten_tomatoes-logo-unique.svg'/>
                                                <span className='font-roboto font-thin text-sm text-[#ddeeff]'>87%</span>
                                            </div>
                                        </div>

                                        <div className='mt-2 flex flex-col border-t border-[#6a7c8f] w-full'>
                                            <div className='flex flex-col w-full py-3 border-b border-[#6a7c8f]'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                    GÊNEROS
                                                </span>
                                                <p className='mt-2 font-roboto font-normal text-sm text-white'>
                                                    Música & Musical, Comédia, Romance
                                                </p>          
                                            </div>
                                            <div className='flex flex-col w-full py-3 border-b border-[#6a7c8f]'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                    DURAÇÃO
                                                </span>
                                                <p className='mt-2 font-roboto font-normal text-sm text-white'>
                                                    1h43min
                                                </p>          
                                            </div>
                                            <div className='flex flex-col w-full py-3 border-b border-[#6a7c8f]'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                    CLASSIFICAÇÃO DE IDADE
                                                </span>
                                                <img alt={'L'} className='size-[3vh] mt-1' src='/public/DJCTQ-L.svg' />         
                                            </div>
                                            <div className='flex flex-col w-full py-3 border-b border-[#6a7c8f]'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                    PAÍS DE PRODUÇÃO
                                                </span>
                                                <p className='mt-2 font-roboto font-normal text-sm text-white'>
                                                    Estados Unidos
                                                </p>          
                                            </div>
                                            <div className='flex flex-col w-full py-3 border-b border-[#6a7c8f]'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                    DIREÇÃO
                                                </span>
                                                <p className='mt-2 font-roboto font-normal text-sm text-white'>
                                                    Stanley Donen
                                                </p>          
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[60%] flex flex-col'>
                                        <div className='h-18'>
                                            <div className='w-full flex items-end'>
                                                <span className='font-lora font-semibold text-white text-3xl'>Cinderela em Paris</span>
                                                <span className='font-roboto font-thin text-[#ddeeff] ml-2'>1957</span>
                                            </div>
                                            <div className='w-full flex items-end'>
                                                <span className='font-lora font-normal italic text-[#ddeeff] text-lg'>"Funny Face"</span>                                        </div>
                                        </div> 

                                        <div className='flex flex-col mt-5'>
                                            <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                SINOPSE
                                            </span>
                                            <p className='mt-2 font-roboto font-normal text-sm text-white'>
                                                Um famoso fotógrafo de modas, Dick Avery, trabalha para a Quality Magazine, uma conceituada revista feminina. Dick cumpre as determinações da editora da revista, Maggie Prescott, que não está satisfeita com os últimos resultados e tenta encontrar "um novo rosto". Dick o acha em Jo Stockton, uma balconista de uma livraria no Greenwich Village onde um ensaio fotográfico ocorrera recentemente. Após certa resistência, Maggie aceita Jo como a modelo que irá à Paris para fotografar e ser o símbolo da Quality. Jo só concorda pois lá poderá conhecer Emile Flostre, um intelectual cujas ideias ela idolatra. Entretanto, ao chegarem em Paris as coisas não correm como o planejado.
                                            </p>          
                                        </div>
                                        
                                        <div className='flex flex-col pt-5 gap-2'>
                                            <span className='font-roboto font-bold text-sm text-just-watch'>
                                                ASSISTA AGORA
                                            </span>
                                            <div className='flex flex-row justify-star items-center border rounded-xl border-just-watch py-3 px-5 gap-3'>
                                                {
                                                    providers.map((provider, index) => (
                                                        <Provider provider={provider} index={index}/>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className='mt-10 xl:mt-5 flex flex-col'>
                                            <div className='flex flex-row justify-between items-center bg-[#0a151f] w-full'>
                                                <span className='font-roboto font-semibold text-sm text-[#6a7c8f] p-3'>
                                                    DISPONIBILIDADE
                                                </span>
                                                <button className='bg-[#434f5b] text-white font-roboto text-xs p-1.5 mr-3 cursor-pointer flex flex-row justify-between items-center gap-1 rounded-sm'>
                                                    <BsBookmarkPlusFill />
                                                    Adicionar disponibilidade
                                                </button>
                                            </div>
                                            <div className='flex flex-col w-full'>
                                                <div className='flex flex-row justify-star items-center w-full h-[5.3rem] border-b border-[#456]'> 
                                                    <div className='bg-[#456] text-white px-4 rotate-[270deg] -ml-[2rem] text-sm'>
                                                        <span>STREAM</span>
                                                    </div>
                                                    <div className='flex flex-row justify-star items-center gap-3 -ml-[1rem]'>
                                                        {
                                                            providers.map((provider, index) => (
                                                                <Provider provider={provider} index={index}/>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex flex-row justify-star items-center w-full h-[5.3rem] border-b border-[#456]'> 
                                                    <div className='bg-[#456] text-white px-4 rotate-[270deg] -ml-[2rem] text-sm'>
                                                        <span>ALUGAR</span>
                                                    </div>
                                                    <div className='flex flex-row justify-star items-center gap-3 -ml-[1rem]'>
                                                        {
                                                            providers.map((provider, index) => (
                                                                <Provider provider={provider} index={index}/>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex flex-row justify-star items-center w-full h-[6.1rem] border-b border-[#456]'> 
                                                    <div className='bg-[#456] text-white px-4 rotate-[270deg] -ml-[2.40rem] text-sm'>
                                                        <span>COMPRAR</span>
                                                    </div>
                                                    <div className='flex flex-row justify-star items-center gap-3 -ml-[1.5rem]'>
                                                        {
                                                            providers.map((provider, index) => (
                                                                <Provider provider={provider} index={index}/>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-end mt-2'>
                                                <span className='text-[#6a7c8f] text-xs'>
                                                    Última verificação em 7 de fevereiro de 2025 ás 22:35:56
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className='flex flex-col mt-5 w-full h-3xl gap-2'>
                                            <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                TRAILER
                                            </span>

                                            <iframe 
                                                width='100%'
                                                height='448' 
                                                src="https://www.youtube.com/embed/Hs6ASCq9YtY?si=qFshg97XUARUnw49" 
                                                title="YouTube video player" 
                                                frameborder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerpolicy="strict-origin-when-cross-origin" 
                                                allowfullscreen
                                            >
                                            </iframe>
                                        </div>

                                        <div className='flex flex-col mt-8 w-full gap-2'>
                                            <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                ELENCO
                                            </span>

                                            <div className='flex flex-row gap-2'>
                                                {
                                                    cast.map((person, index) => (
                                                        <Cast cast={person}/>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className='flex flex-col mt-8 mb-50 w-full gap-2'>
                                            <span className='font-roboto font-semibold text-sm text-[#6a7c8f]'>
                                                SIMILARES
                                            </span>

                                            <div className='flex flex-row gap-2'>
                                                {
                                                    similar.map((similarAux, index) => (
                                                        <Similar similar={similarAux}/>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>            
            }
        </div>
    )
}

export default Movie

{/* <div className='absolute bg-background grid grid-cols-10 w-[70%] mt-25 -mb-20 rounded-t-lg py-8 px-12'>
<div className='col-span-4 mr-10'>
    <img className='w-3xs h-[24rem] rounded-sm' alt='Poster Funny Face' src='https://image.tmdb.org/t/p/original/1CW8Wn2itBQ7wACBQHpOyIbPpmD.jpg' />
    <div className='flex justify-center py-2 gap-3'>
        <div className='flex flex-row justify-center items-center gap-1'>
            <img className='size-[1rem]' src='/public/letterboxd-logo-dark.svg'/>
            <span className='font-roboto font-thin text-sm text-[#ddeeff]'>3.7</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
            <img className='h-[0.9rem]' src='/public/imdb_logo-unique.svg'/>
            <span className='font-roboto font-thin text-sm text-[#ddeeff]'>7.0</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
            <img className='size-[1rem]' src='/public/rotten_tomatoes-logo-unique.svg'/>
            <span className='font-roboto font-thin text-sm text-[#ddeeff]'>87%</span>
        </div>
    </div>
</div>
<div className='col-span-6 size-full flex flex-col bg-amber-700'>
    <div className='h-18 bg-blue-950'>
        <div className='w-full flex items-end'>
            <span className='font-lora font-semibold text-white text-3xl'>Cinderela em Paris</span>
            <span className='font-roboto font-thin text-[#ddeeff] ml-2'>1957</span>
        </div>
        <div className='w-full flex items-end'>
            <span className='font-lora font-normal italic text-[#ddeeff] text-lg'>"Funny Face"</span>                                        </div>
        </div> 
    </div>
    <div className='bg-red-900'>iasmin</div>
</div>
</div> */}