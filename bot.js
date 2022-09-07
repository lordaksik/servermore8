require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
   async function request() {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      let result = 0;
      let result2 = 0;
      let result3 = 0;
      let result4 = 0;
      let result5 = 0;
      let result6 = 0;
      let result7 = 0;
      let result8 = 0;
      let result9 = 0;
      score_dealer = data.items.results[0].results.score_dealer
  
      for (let i = 0; i <= 5; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if ((score_player > 8) && (score_dealer > 8))
              result = result + 1;
      }
  
      global.games = result;
      for (let i = 0; i <= 5; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if ((score_player < 8) && (score_dealer < 8))
              result2 = result2 + 1;
      }
  
      global.games2 = result2;
      for (let i = 0; i <= 11; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_player < 8)
              result3 = result3 + 1;
      }
  
      global.games3 = result3;
  
      for (let i = 0; i <= 11; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_player > 8)
              result4 = result4 + 1;
      }
      global.games4 = result4;
       for (let i = 0; i <= 11; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_dealer < 8)
              result7 = result7 + 1;
      }
  
      global.games7 = result7;
  
      for (let i = 0; i <= 11; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_dealer > 8)
              result8 = result8 + 1;
      }
  
      global.games8 = result8;
      for (let i = 0; i <= 29; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
  
  
          if ((score_player == 8) || (score_dealer == 8))
              result5 = result5 + 1;
      }
      global.games5 = result5;
     for (let i = 0; i <= 13; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player

  if ((parseInt(score_player,10) === 11) || (parseInt(score_dealer,10) ===11) || (parseInt(score_player,10) ===12) || (parseInt(score_dealer,10) ===12) ||
(parseInt(score_player,10) ===13) || (parseInt(score_dealer,10) ===13))
      { result9 = result9 + 1;}
}  
          global.games9 = result9;

  
  }
  function reskef() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade);
   if (trade == 6) {
      ctx.reply( "12 карт больше 8");
       // пауза 5 минут если это 
   }

}
  function reskef2() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   trade5 = global.games5;
   console.log(trade2);
   if (trade2 == 6) {
      ctx.reply(" 12 карт меньше 8");
   }

}
  function reskef3() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade3);
   if (trade3 == 12) {
      ctx.reply( "Вертикаль 12 карт игрока меньше 8");
   }

}
function reskef4() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade4);
   if (trade4 == 12) {
      ctx.reply("Вертикаль 12 карт игрока больше 8");
   }
}
  function reskef5() {
   request()
   trade5 = global.games5;

   if (trade5 == 0) {
      ctx.reply("30 раздач не было 8");
   }

}
 
function reskef7() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   trade7 = global.games7;
   console.log(trade7);
   if (trade7 == 12) {
      ctx.reply("Вертикаль 12 карт дилера меньше 8");
   }
}
   function reskef8() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   trade8 = global.games8;
   console.log(trade8);
   if (trade8 == 12) {
      ctx.reply("Вертикаль 12 карт дилера больше 8");
   }
}
    function reskef9() {
   request()
   trade9 = global.games9;
   console.log(trade9);
   if (trade9 == 0) {
      ctx.reply("Фигурок не было 14 раздач");
   }
}
  
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «Ниже/Выше 8» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin");
     
       global.time= setInterval(reskef, 30000)
       global.time2= setInterval(reskef2, 30000)
       global.time3= setInterval(reskef3, 30000)
       global.time4= setInterval(reskef4, 30000)
       global.time5= setInterval(reskef5, 100000)
       global.time7= setInterval(reskef7, 30000)
       global.time8= setInterval(reskef8, 30000)
       }



good()}
)
bot.hears('/end', async (ctx) => {
    try {
      clearInterval(time);
      clearInterval(time2);
      clearInterval(time3);
      clearInterval(time4);
      clearInterval(time5);
  clearInterval(time7);
      clearInterval(time8);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

