(this.webpackJsonpkino=this.webpackJsonpkino||[]).push([[0],{10:function(e,t,a){e.exports={gridWrapper:"style_gridWrapper__tMyqg",notFound:"style_notFound__3YC5M",notFoundText:"style_notFoundText__1p-en"}},15:function(e,t,a){e.exports={wrapper:"style_wrapper__z6yqj"}},17:function(e,t,a){e.exports={input:"style_input__2soud"}},2:function(e,t,a){e.exports={headerWrapper:"style_headerWrapper__1umpS",header:"style_header__rIEgk",iconsContainer:"style_iconsContainer__2gBC2",iconContainer:"style_iconContainer__24uWd",selectedIconContainer:"style_selectedIconContainer__21HuB",input:"style_input__1fyvv",iconText:"style_iconText__3j2Gk",logoContainer:"style_logoContainer__10e5Y",kinoIcon:"style_kinoIcon__ic9BL",kino:"style_kino__xU4Sw",show:"style_show__3zTZB",searchWrapper:"style_searchWrapper__2Kpsb",searchShow:"style_searchShow__zp6h1",searchHidden:"style_searchHidden__2Tbpm",shadow:"style_shadow__1E8xq"}},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(3),o=a.n(i),r=a(14),n=a.n(r),s=(a(22),a(7)),l=a(10),d=a.n(l),h=a(8),c=a.n(h),p=a(15),g=a.n(p),u=a(5),_=a(6),v=a(16),m=a(0),y=function(e){var t,a=e.rating,i=(t=a,Math.round(t/2*2)/2),o=[];return function(){for(var e=0;e<Math.floor(i);e++)o.push(Object(m.jsx)(u.a,{icon:_.e,color:"black",size:"2x"},Math.random()));if(i-Math.floor(i)!==0&&o.push(Object(m.jsx)(u.a,{icon:_.f,color:"black",size:"2x"},Math.random())),i<5)for(var t=o.length;t<5;t++)o.push(Object(m.jsx)(u.a,{icon:v.a,color:"black",size:"2x"},Math.random()))}(),Object(m.jsx)("div",{className:g.a.wrapper,children:o},Math.random())},f=function(e){var t,a,o=e.data,r=Object(i.useState)(!1),n=Object(s.a)(r,2),l=n[0],d=n[1];return Object(m.jsx)(m.Fragment,{children:((null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name))&&Object(m.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},className:c.a.filmWrapper,style:{backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(o.poster_path,")")},children:l&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:c.a.opacityLayer}),Object(m.jsxs)("div",{className:c.a.filmDescription,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:c.a.title,children:null!==(t=null===o||void 0===o?void 0:o.title)&&void 0!==t?t:null===o||void 0===o?void 0:o.name}),Object(m.jsx)("p",{className:c.a.description,children:(null!==(a=null===o||void 0===o?void 0:o.release_date)&&void 0!==a?a:null===o||void 0===o?void 0:o.first_air_date).slice(0,4)})]}),Object(m.jsx)(y,{rating:o.vote_average})]})]})})})},b=function(e){var t=e.data;return function(){var e=[];return t.length>0?(t.map((function(t,a){return e.push(Object(m.jsx)(f,{data:t},a))})),Object(m.jsx)("div",{className:d.a.gridWrapper,children:e})):Object(m.jsx)("div",{className:d.a.notFound,children:Object(m.jsx)("p",{className:d.a.notFoundText,children:"Your search did not return any results. please try again with other information."})})}()},w=a(4),j=a.n(w),k=a(11),x=function(){return Object(m.jsxs)("div",{className:j.a.footer,children:[Object(m.jsxs)("div",{className:j.a.pageInfo,children:[Object(m.jsxs)("div",{className:j.a.contentWrapper,children:[Object(m.jsxs)("div",{className:j.a.logoContainer,children:[Object(m.jsx)("h1",{className:j.a.kino,children:"kin"}),Object(m.jsx)(u.a,{className:j.a.kinoIcon,size:"2x",icon:_.c}),Object(m.jsx)("h3",{className:j.a.show,children:"show"})]}),Object(m.jsx)("h3",{style:{marginTop:"1rem",color:"gray"},children:"Whatch them all."})]}),Object(m.jsxs)("div",{className:j.a.tecnologies,children:[Object(m.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",className:j.a.tmdb,title:"The Movie Data Base",children:" "}),Object(m.jsx)("a",{href:"https://es.reactjs.org/",target:"_blank",rel:"noreferrer",title:"React.js",children:Object(m.jsx)(u.a,{size:"2x",icon:k.c,color:"white",className:j.a.react})})]})]}),Object(m.jsxs)("div",{className:j.a.contactWrapper,children:[Object(m.jsxs)("div",{className:j.a.contact,children:[Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/francis-alberto-gette-2822a8120/",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(u.a,{size:"2x",icon:k.b,color:"white",className:j.a.linkedin})," "]}),Object(m.jsx)("a",{href:"https://github.com/franngette",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(u.a,{size:"2x",icon:k.a,color:"white",className:j.a.github})}),Object(m.jsx)("a",{href:"mailto: franngette@gmail.com",children:Object(m.jsx)(u.a,{size:"2x",icon:_.a,color:"white",className:j.a.mail})})]}),Object(m.jsx)("p",{className:j.a.name,children:"Francis Gette. 2021."})]})]})},O=a(2),T=a.n(O),S=a(17),N=a.n(S),A=function(e){var t=e.placeholder,a=e.type,i=e.onChange;return Object(m.jsx)("input",{type:a,placeholder:t,className:N.a.input,onChange:i})},C={page:1,results:[{title:"Monster Hunter",original_language:"en",original_title:"Monster Hunter",poster_path:"/uwjaCH7PiWrkz7oWJ4fcL3xGrb0.jpg",video:!1,vote_average:7.2,overview:"A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",id:458576,vote_count:783,adult:!1,backdrop_path:"/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg",release_date:"2020-12-03",genre_ids:[14,28,12],popularity:3447.755,media_type:"movie"},{adult:!1,backdrop_path:"/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",genre_ids:[35,10751,16],original_language:"en",original_title:"Tom & Jerry",id:587807,title:"Tom & Jerry",video:!1,vote_average:8,vote_count:215,overview:"Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can\u2019t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",release_date:"2021-02-12",poster_path:"/6KErczPBROQty7QoIsaa6wJYXZi.jpg",popularity:1079.961,media_type:"movie"},{backdrop_path:"/srYya1ZlI97Au4jUYAktDe3avyA.jpg",genre_ids:[14,28,12],original_language:"en",original_title:"Wonder Woman 1984",poster_path:"/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",title:"Wonder Woman 1984",vote_average:6.9,vote_count:3920,overview:"Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",release_date:"2020-12-16",id:464052,video:!1,adult:!1,popularity:1807.202,media_type:"movie"},{backdrop_path:"/vX5JtEcumMQvMCLVcIqfetc7hdg.jpg",genre_ids:[35,80,53],original_language:"en",original_title:"I Care a Lot",poster_path:"/gKnhEsjNefpKnUdAkn7INzIFLSu.jpg",title:"I Care a Lot",vote_average:6.9,vote_count:478,overview:"A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.",release_date:"2021-02-19",id:601666,video:!1,adult:!1,popularity:747.699,media_type:"movie"},{backdrop_path:"/tHjoTxM4SMgazi3Y2X8mmAtONVL.jpg",genre_ids:[10751,12,35,14],original_language:"en",original_title:"Flora & Ulysses",poster_path:"/syobJCxZcIJl0OpjNroZSQKa1kW.jpg",title:"Flora & Ulysses",vote_average:7,vote_count:47,overview:"When Flora rescues a squirrel she names Ulysses, she is amazed to discover he possesses unique superhero powers, which take them on an adventure of humorous complications that ultimately change Flora's life--and her outlook--forever.",release_date:"2021-02-19",id:621876,video:!1,adult:!1,popularity:796.379,media_type:"movie"},{backdrop_path:"/ks0jQSWM8AKSHHGFiUKDyvXM5bS.jpg",genre_ids:[27,53],original_language:"en",original_title:"Wrong Turn",poster_path:"/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",title:"Wrong Turn",vote_average:6.4,vote_count:177,overview:"Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course\u2014and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.",release_date:"2021-01-26",id:630586,video:!1,adult:!1,popularity:146.409,media_type:"movie"},{adult:!1,backdrop_path:"/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg",genre_ids:[18,14,878],overview:"When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",original_title:"\uc2b9\ub9ac\ud638",poster_path:"/bmemsraCG1kIthY74NjDnnLRT2Q.jpg",id:581389,vote_average:7.3,video:!1,vote_count:285,title:"Space Sweepers",release_date:"2021-02-05",original_language:"ko",popularity:2217.677,media_type:"movie"},{adult:!1,backdrop_path:"/fAJuZDEkrqmYQUUDrro8wRqb2Tn.jpg",genre_ids:[10749,35,18],original_language:"en",original_title:"To All the Boys: Always and Forever",id:614409,vote_count:924,title:"To All the Boys: Always and Forever",vote_average:8,video:!1,overview:"Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans \u2014 with and without Peter.",release_date:"2021-02-12",poster_path:"/zdkJs9j6yKo9di0kjtctM01fSMv.jpg",popularity:533.727,media_type:"movie"},{genre_ids:[28,12,18,37],original_language:"en",original_title:"News of the World",poster_path:"/fYQCgVRsQTEfUrP7cW5iAFVYOlh.jpg",video:!1,vote_average:7.2,overview:"A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped.",release_date:"2020-12-25",vote_count:581,title:"News of the World",adult:!1,backdrop_path:"/jjPpjUYf3o698cPx06FHZ5zqomv.jpg",id:581032,popularity:73.781,media_type:"movie"},{genre_ids:[18,36],original_language:"en",original_title:"Judas and the Black Messiah",poster_path:"/iIgr75GoqFxe1X5Wz9siOODGe9u.jpg",video:!1,vote_average:7.6,id:583406,overview:"Bill O'Neal infiltrates the Black Panthers per FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends, falling for a fellow revolutionary en route, a battle wages for O\u2019Neal\u2019s soul.",release_date:"2021-02-12",vote_count:120,title:"Judas and the Black Messiah",adult:!1,backdrop_path:"/gpFBYlNHCaxiqArTI2TysgVy4l0.jpg",popularity:250.386,media_type:"movie"},{genre_ids:[10751,14,16,35],original_language:"en",original_title:"The Croods: A New Age",poster_path:"/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",video:!1,vote_average:7.5,overview:"Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",release_date:"2020-11-25",vote_count:1595,title:"The Croods: A New Age",adult:!1,backdrop_path:"/cjaOSjsjV6cl3uXdJqimktT880L.jpg",id:529203,popularity:597.922,media_type:"movie"},{genre_ids:[53,80],original_language:"en",original_title:"The Little Things",poster_path:"/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",video:!1,vote_average:6.4,id:602269,overview:"Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",release_date:"2021-01-28",vote_count:418,title:"The Little Things",adult:!1,backdrop_path:"/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",popularity:1204.033,media_type:"movie"},{backdrop_path:"/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",genre_ids:[28,53,878],title:"Tenet",original_language:"en",original_title:"Tenet",poster_path:"/k68nPLbIST6NP96JmTxmZijEvCA.jpg",video:!1,vote_average:7.3,overview:"Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",release_date:"2020-08-22",id:577922,vote_count:4517,adult:!1,popularity:588.62,media_type:"movie"},{genre_ids:[14,10749],original_language:"en",original_title:"The Map of Tiny Perfect Things",poster_path:"/6y3ev0rJFbHA1hU22UPmmfzBjrG.jpg",video:!1,vote_average:7.3,overview:"The film tells the story of quick-witted teen Mark, contentedly living the same day in an endless loop whose world is turned upside-down when he meets mysterious Margaret also stuck in the time loop. Mark and Margaret form a magnetic partnership, setting out to find all the tiny things that make that one day perfect. What follows is a love story with a fantastical twist, as the two struggle to figure out how -- and whether -- to escape their never-ending day.",release_date:"2021-02-12",vote_count:175,title:"The Map of Tiny Perfect Things",adult:!1,backdrop_path:"/gg9zZB9xLPWmuxOpKw0HX0QLMN6.jpg",id:672647,popularity:46.089,media_type:"movie"},{backdrop_path:"/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",genre_ids:[10751,16,35,18,10402,14],title:"Soul",original_language:"en",original_title:"Soul",poster_path:"/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",video:!1,vote_average:8.3,overview:"Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",release_date:"2020-12-25",id:508442,vote_count:4996,adult:!1,popularity:787.539,media_type:"movie"},{adult:!1,backdrop_path:"/eSl9MRMvWJ0Hm5yePHgsRhFtPTw.jpg",genre_ids:[878,10749,18],original_language:"en",original_title:"Bliss",id:613911,vote_count:202,title:"Bliss",vote_average:5.5,video:!1,overview:"A mind-bending love story following Greg who, after recently being divorced and then fired, meets the mysterious Isabel, a woman living on the streets and convinced that the polluted, broken world around them is just a computer simulation. Doubtful at first, Greg eventually discovers there may be some truth to Isabel\u2019s wild conspiracy.",release_date:"2021-02-05",poster_path:"/b7BllsQkD6nTkAdtd28UVCmKqVi.jpg",popularity:303.956,media_type:"movie"},{adult:!1,backdrop_path:"/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg",genre_ids:[18,53],overview:"On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",original_title:"Red Dot",poster_path:"/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",id:649087,vote_average:6.3,video:!1,vote_count:223,title:"Red Dot",release_date:"2021-02-11",original_language:"sv",popularity:2725.965,media_type:"movie"},{adult:!1,backdrop_path:"/vQJ3yBdF91tzd73G8seL5bOxfvG.jpg",genre_ids:[53,27,18],original_language:"en",original_title:"Fear of Rain",id:599281,title:"Fear of Rain",video:!1,vote_average:7.2,vote_count:93,overview:"A teenage girl living with schizophrenia begins to suspect her neighbor has kidnapped a child. Her parents try desperately to help her live a normal life, without exposing their own tragic secrets, and the only person who believes her is Caleb \u2013 a boy she isn\u2019t even sure exists.",release_date:"2021-02-12",poster_path:"/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg",popularity:1218.108,media_type:"movie"},{adult:!1,backdrop_path:"/wofwzHaXg61PpMEv52JMmqnfECA.jpg",genre_ids:[16,35,10751,9648,12],overview:"An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",original_title:"Scooby-Doo! The Sword and the Scoob",poster_path:"/cjwji8a2Os0Ew3iJyKRlGlQUhXJ.jpg",id:682254,vote_average:7.5,video:!1,vote_count:8,title:"Scooby-Doo! The Sword and the Scoob",release_date:"2021-02-22",original_language:"en",popularity:337.002,media_type:"movie"},{adult:!1,backdrop_path:"/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",genre_ids:[12,878,28],id:299534,original_language:"en",original_title:"Avengers: Endgame",overview:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",poster_path:"/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",release_date:"2019-04-24",title:"Avengers: Endgame",video:!1,vote_average:8.3,vote_count:17205,popularity:282.993,media_type:"movie"}],total_pages:1e3,total_results:2e4},W={page:1,results:[{first_air_date:"2021-01-15",origin_country:["US"],overview:"Wanda Maximoff and Vision\u2014two super-powered beings living idealized suburban lives\u2014begin to suspect that everything is not as it seems.",vote_count:6134,name:"WandaVision",backdrop_path:"/lOr9NKxh4vMweufMOUDJjJhCRHW.jpg",id:85271,genre_ids:[10765,9648,18],poster_path:"/frobUz2X5Pc8OiVZU8Oo5K3NKMM.jpg",original_language:"en",vote_average:8.5,original_name:"WandaVision",popularity:5511.607,media_type:"tv"},{genre_ids:[10765,10759],original_name:"Superman & Lois",origin_country:["US"],poster_path:"/6SJppowm7cdQgLkvoTlnTUSbjr9.jpg",vote_average:8.7,overview:"After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.",vote_count:162,name:"Superman & Lois",id:95057,first_air_date:"2021-02-23",backdrop_path:"/TXaR5xmz2ohHgnpf0YPWtZPlCO.jpg",original_language:"en",popularity:352.878,media_type:"tv"},{backdrop_path:"/eHLODQnYO1KM5AjKf54WIf5L6uw.jpg",genre_ids:[10765,16,10759],original_language:"ja",vote_count:2869,first_air_date:"2013-04-07",origin_country:["JP"],poster_path:"/aiy35Evcofzl7hASZZvsFgltHTX.jpg",vote_average:8.7,id:1429,overview:"Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",name:"Attack on Titan",original_name:"\u9032\u6483\u306e\u5de8\u4eba",popularity:170.907,media_type:"tv"},{backdrop_path:"/1bztL5ZgA9m8OSxO51TBYyoVO8P.jpg",genre_ids:[10765,18],original_name:"Tribes of Europa",origin_country:["DE"],poster_path:"/6zZxAFOtNwHCtTgSc2hU7pVIvDl.jpg",vote_average:7.5,vote_count:30,name:"Tribes of Europa",overview:"2074. In the wake of a mysterious global disaster, war rages between the Tribes that have emerged from the wreckage of Europe. Three siblings from the peaceful Origine tribe are separated and forced to forge their own paths in an action-packed fight for the future of this new Europa.",id:93808,first_air_date:"2021-02-19",original_language:"de",popularity:65.733,media_type:"tv"},{backdrop_path:"/w99Pk4pJSieveKIIc7KGXtsFT3U.jpg",genre_ids:[18],original_language:"en",vote_count:64,id:97173,overview:"A single mother enters a world of twisted mind games when she begins an affair with her psychiatrist boss while secretly befriending his mysterious wife.",poster_path:"/sfd90NIf778KoBFmpdBTow4xTm7.jpg",vote_average:7.8,original_name:"Behind Her Eyes",origin_country:["GB"],first_air_date:"2021-02-17",name:"Behind Her Eyes",popularity:329.616,media_type:"tv"},{backdrop_path:"/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",genre_ids:[10759,18,10765],original_language:"en",vote_count:9788,first_air_date:"2010-10-31",origin_country:["US"],poster_path:"/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",vote_average:8,id:1402,overview:"Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",name:"The Walking Dead",original_name:"The Walking Dead",popularity:789.212,media_type:"tv"},{backdrop_path:"/suopoADq0k8YZr4dQXcU6pToj6s.jpg",genre_ids:[10765,18,10759],original_language:"en",vote_count:13180,id:1399,overview:"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",poster_path:"/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",vote_average:8.4,original_name:"Game of Thrones",origin_country:["US"],first_air_date:"2011-04-17",name:"Game of Thrones",popularity:396.086,media_type:"tv"},{backdrop_path:"/hVMoqvXs5j9ffun56tZ5YhliSD9.jpg",first_air_date:"2021-02-24",genre_ids:[35,18],original_language:"en",poster_path:"/e4aqizYQ8eeTGNZMq6WiFfqoZbz.jpg",id:117581,original_name:"Ginny & Georgia",origin_country:["US"],vote_count:16,overview:"Angsty and awkward fifteen year old Ginny Miller often feels more mature than her thirty year old mother, the irresistible and dynamic Georgia Miller. After years on the run, Georgia desperately wants to put down roots in picturesque New England and give her family something they've never had... a normal life. But it's not all carpool and Kombucha as Georgia's past threatens her and her family's new way of life... and Georgia will do anything to protect her family.",vote_average:8.7,name:"Ginny & Georgia",popularity:110.062,media_type:"tv"},{backdrop_path:"/colNDt09PACkwtCgWILJQ8i6vSR.jpg",genre_ids:[9648,18,80],original_language:"en",poster_path:"/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",overview:"Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale\u2019s wholesome facade.",id:69050,vote_average:8.6,first_air_date:"2017-01-26",vote_count:10177,name:"Riverdale",original_name:"Riverdale",origin_country:["US"],popularity:1611.75,media_type:"tv"},{backdrop_path:"/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg",first_air_date:"1999-10-20",genre_ids:[10759,35,16],id:37854,name:"One Piece",origin_country:["JP"],original_language:"ja",original_name:"\u30ef\u30f3\u30d4\u30fc\u30b9",overview:'Years ago, the fearsome pirate king Gol D. Roger was executed, leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new pirate king. Monkey D. Luffy, a boy who consumed one of the "Devil\'s Fruits", has it in his head that he\'ll follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and he\'s surrounded by a bevy of skilled fighters and thieves to help him along the way. Monkey D. Luffy brings a bunch of his crew followed by, Roronoa Zoro, Nami, Usopp, Sanji, Tony-Tony Chopper, Nico Robin, Franky, and Brook. They will do anything to get the One Piece and become King of the Pirates!..',poster_path:"/4I1xjEKZxeeBT8RXg0BA6k6PM8e.jpg",vote_average:8.7,vote_count:1756,popularity:43.622,media_type:"tv"},{backdrop_path:"/2fhU42I8pPdvEKfrZtuJ8KrzdeF.jpg",genre_ids:[10765],original_name:"Snowpiercer",origin_country:["US"],poster_path:"/95xQPSqwvQDRoB3rXUn4lRyJrBW.jpg",vote_average:7.5,vote_count:528,name:"Snowpiercer",overview:"Set more than seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a gigantic, perpetually-moving train that circles the globe as class warfare, social injustice and the politics of survival play out.",id:79680,first_air_date:"2020-05-17",original_language:"en",popularity:265.241,media_type:"tv"},{backdrop_path:"/5sEV5v8vEGnNp9s06YjFI0RLkM4.jpg",first_air_date:"2019-11-01",genre_ids:[10765,18],id:87917,name:"For All Mankind",origin_country:["US"],original_language:"en",original_name:"For All Mankind",overview:"Explore an aspirational world where NASA and the space program remained a priority and a focal point of our hopes and dreams as told through the lives of NASA astronauts, engineers, and their families.",poster_path:"/w5r3AG9Etva4IcyMhVn6TYl577l.jpg",vote_average:7.4,vote_count:136,popularity:63.569,media_type:"tv"},{backdrop_path:"/p7fwOnlxYYlB4A8U2b0JfX21Rr1.jpg",genre_ids:[10765,10759],original_name:"The Mandalorian",origin_country:["US"],poster_path:"/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",vote_average:8.5,vote_count:5899,name:"The Mandalorian",overview:"After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",id:82856,first_air_date:"2019-11-12",original_language:"en",popularity:432.565,media_type:"tv"},{first_air_date:"2021-01-27",origin_country:["US"],overview:"Crash-landed alien Harry takes on the identity of a small-town Colorado doctor. Arriving with a secret mission, he starts off living a simple life\u2026but things get a bit rocky when he\u2019s roped into solving a local murder and realizes he needs to assimilate into his new world. As he does, he begins to wrestle with the moral dilemma of his mission and asking the big life questions like: \u201cAre human beings worth saving?\u201d and \u201cWhy do they fold their pizza before eating it?\u201d",vote_count:50,name:"Resident Alien",backdrop_path:"/fPF6h8LLtZ40NRqkHfx2DvFbmkW.jpg",id:96580,genre_ids:[10765],poster_path:"/bG5aqfT5lTHuSbcQofNHtH0RyyP.jpg",original_language:"en",vote_average:8.9,original_name:"Resident Alien",popularity:59.431,media_type:"tv"},{first_air_date:"2017-05-02",genre_ids:[80,18],original_language:"es",poster_path:"/MoEKaPFHABtA1xKoOteirGaHl1.jpg",original_name:"La casa de papel",origin_country:["ES"],id:71446,overview:"To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",name:"Money Heist",vote_count:12321,vote_average:8.3,backdrop_path:"/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",popularity:191.629,media_type:"tv"},{original_name:"The New York Times Presents",origin_country:["US"],poster_path:"/rNLd1pJZiDMWtuy09Agy1Aggurz.jpg",vote_average:7.4,overview:"A series of standalone documentaries powered by the unparalleled journalism and insight of The New York Times, bringing viewers close to the essential stories of our time.",id:105763,vote_count:14,name:"The New York Times Presents",original_language:"en",backdrop_path:"/sidYvhiaFagWJEPylMenatLY0NF.jpg",first_air_date:"2020-07-10",genre_ids:[99,10763],popularity:7.011,media_type:"tv"},{backdrop_path:"/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",genre_ids:[80,18],original_name:"Clarice",origin_country:["US"],poster_path:"/7OFxU0bBO0HDL4klXmM1ahJPbv8.jpg",vote_average:8.5,vote_count:26,name:"Clarice",overview:"In 1993, six months after the events of The Silence of the Lambs, FBI Agent Clarice Starling returns to the field to pursue serial murderers and sexual predators while navigating the high stakes political world of Washington, D.C.",id:103302,first_air_date:"2021-02-11",original_language:"en",popularity:36.406,media_type:"tv"},{genre_ids:[10759,10765,9648,80],original_name:"Batwoman",origin_country:["US"],poster_path:"/xjyEpcuDbB1jy0ehNQMBiO8KOdr.jpg",vote_average:7.3,overview:"Kate Kane, armed with a passion for social justice and a flair for speaking her mind, soars onto the streets of Gotham as Batwoman, an out lesbian and highly trained street fighter primed to snuff out the failing city's criminal resurgence. But don't call her a hero yet. In a city desperate for a savior, Kate must overcome her own demons before embracing the call to be Gotham's symbol of hope",vote_count:938,name:"Batwoman",id:89247,first_air_date:"2019-10-06",backdrop_path:"/8vNQ3i2Xa3mrCKn6eq2ce5hhegT.jpg",original_language:"en",popularity:251.086,media_type:"tv"},{first_air_date:"2020-12-06",origin_country:["US"],overview:"New Orleans judge Michael Desiato is forced to confront his own deepest convictions when his son is involved in a hit and run that embroils an organized crime family.",vote_count:41,name:"Your Honor",backdrop_path:"/8y4i7PkOCjohwwO6nnerAv803bs.jpg",id:86430,genre_ids:[18],poster_path:"/xWJZjIKPeEZhK3JRYKOe06yW6IU.jpg",original_language:"en",vote_average:7.9,original_name:"Your Honor",popularity:36.221,media_type:"tv"},{first_air_date:"2021-02-19",genre_ids:[18,9648],original_language:"es",poster_path:"/kl07N07l4XNjXF48oujzWXs40Dw.jpg",original_name:"El Internado: Las Cumbres",origin_country:["ES"],id:97513,overview:"In an inaccessible place between the mountains and isolated from the world, a school is located next to an old monastery. The students are rebellious and problematic young people who live under the strict and severe discipline imposed by the center to reintegrate them into society. The surrounding forest is home to ancient legends, threats that are still valid and that will immerse them in terrifying adventures.",name:"The Boarding School: Las Cumbres",vote_count:237,vote_average:7.3,backdrop_path:"/hvbGY8PItRa17A9QSpPCdZAD8Ge.jpg",popularity:1132.335,media_type:"tv"}],total_pages:1e3,total_results:2e4},M=function(e){var t=e.getSelected,a=e.inputHandler,o=Object(i.useState)("tv"),r=Object(s.a)(o,2),n=r[0],l=r[1],d=Object(i.useState)(!1),h=Object(s.a)(d,2),c=h[0],p=h[1],g=Object(i.useState)(!1),v=Object(s.a)(g,2),y=v[0],f=v[1],b=function(){var e=function(e){switch(e){case"movie":return C;case"tv":return W}}(n);t(e.results)},w=T.a.searchHidden;c&&(w=T.a.searchShow);return Object(i.useEffect)((function(){b()}),[n]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("header",{className:T.a.headerWrapper,children:[Object(m.jsxs)("div",{className:T.a.header,children:[Object(m.jsxs)("div",{className:T.a.iconsContainer,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{id:"radio-1",className:T.a.input,type:"radio",name:"radio-group",value:"tv",onChange:function(e){l(e.target.value)}}),Object(m.jsxs)("label",{htmlFor:"radio-1",className:"tv"===n?T.a.selectedIconContainer:T.a.iconContainer,children:[Object(m.jsx)(u.a,{size:"2x",icon:_.g}),Object(m.jsx)("p",{className:T.a.iconText,children:"TV shows"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{id:"radio-2",className:T.a.input,type:"radio",name:"radio-group",value:"movie",onClick:function(e){l(e.target.value)}}),Object(m.jsxs)("label",{htmlFor:"radio-2",className:"movie"===n?T.a.selectedIconContainer:T.a.iconContainer,children:[Object(m.jsx)(u.a,{size:"2x",icon:_.b}),Object(m.jsx)("p",{className:T.a.iconText,children:"Films"})]})]})]}),Object(m.jsxs)("div",{className:T.a.logoContainer,children:[Object(m.jsx)("h1",{className:T.a.kino,children:"kin"}),Object(m.jsx)(u.a,{className:T.a.kinoIcon,size:"2x",icon:_.c}),Object(m.jsx)("h3",{className:T.a.show,children:"show"})]}),Object(m.jsxs)("div",{className:T.a.searchWrapper,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){y||p(!1)},children:[Object(m.jsx)(u.a,{size:"1x",icon:_.d,color:"white"}),Object(m.jsx)("div",{className:w,onFocus:function(){return f(!0)},onBlur:function(){return f(!1),void p(!1)},children:Object(m.jsx)(A,{placeholder:"Search...",onChange:function(e){var t;""===(t=e.target.value)?b():a(t)}})})]})]}),Object(m.jsx)("div",{className:T.a.shadow})]})})},F=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],r=function(e){o(e)};return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(M,{getSelected:r,inputHandler:function(e){""===e&&r();var t=a.filter((function(t){return(t.name||t.title).includes(e)}));t&&o(t)}}),Object(m.jsx)("div",{className:"children",children:Object(m.jsx)(b,{data:a})}),Object(m.jsx)(x,{})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),o(e),r(e),n(e)}))};n.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),z()},4:function(e,t,a){e.exports={footer:"style_footer__3g71k",pageInfo:"style_pageInfo__12qZ4",contentWrapper:"style_contentWrapper__2Qo2t",logoContainer:"style_logoContainer__3-siP",kinoIcon:"style_kinoIcon__2__e0",kino:"style_kino__2rnaC",show:"style_show__3OyYP",contactWrapper:"style_contactWrapper__ObZ10",name:"style_name__158uv",tecnologies:"style_tecnologies__14CYt",tmdb:"style_tmdb__3z0gw",react:"style_react__1JO_q",mail:"style_mail__1H2D_",linkedin:"style_linkedin__33SDa",github:"style_github__3NhAI"}},8:function(e,t,a){e.exports={filmWrapper:"style_filmWrapper__1FCQx",opacityLayer:"style_opacityLayer__2y_xF",opacityAn:"style_opacityAn__3HEYh",title:"style_title__3yFY4",description:"style_description__1HISz",filmDescription:"style_filmDescription__2yW1n"}}},[[29,1,2]]]);
//# sourceMappingURL=main.9b8e9904.chunk.js.map