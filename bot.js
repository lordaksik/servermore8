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
      score_dealer = data.items.results[0].results.score_dealer
  
      for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if ((score_player > 8) && (score_dealer > 8))
              result = result + 1;
      }
  
      global.games = result;
      for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if ((score_player < 8) && (score_dealer < 8))
              result2 = result2 + 1;
      }
  
      global.games2 = result2;
      for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_player < 8)
              result3 = result3 + 1;
      }
  
      global.games3 = result3;
  
      for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_player > 8)
              result4 = result4 + 1;
      }
       for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_dealer < 8)
              result7 = result7 + 1;
      }
  
      global.games7 = result7;
  
      for (let i = 0; i <= 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
          if (score_dealer > 8)
              result8 = result8 + 1;
      }
  
      global.games8 = result8;
      for (let i = 0; i <= 14; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
  
  
          if ((score_player == 8) || (score_dealer == 8))
              result5 = result5 + 1;
      }
      global.games5 = result5;
      for (let i = 0; i < 9; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
  
          if ((score_player == 11) || (score_player == 12) || (score_player == 13) || (score_player == 14) || (score_dealer == 11) || (score_dealer == 12) || (score_dealer == 13) || (score_dealer == 14))
              result6 = result6 + 1;
      }
      global.games6 = result6;
  
  }
  function reskef() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade == 10) {
      ctx.reply( "10 карт больше 8");
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
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade2 == 10) {
      ctx.reply(" 10 карт меньше 8");
   }

}
  function reskef3() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade3 == 10) {
      ctx.reply( "Вертикаль 10 карт игрока меньше 8");
   }

}
function reskef4() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade4 == 10) {
      ctx.reply("Вертикаль 10 карт игрока больше 8");
   }
}
  function reskef5() {
   request()
   trade5 = global.games5;

   if (trade5 == 0) {
      ctx.reply("15 раздач не было 8");
   }

}
  function reskef6() {
   request()
   trade6 = global.games6;

   if (trade6 == 0) {
      ctx.reply( "8 карт не было J Q K туз");
   }
}   
function reskef7() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   trade7 = global.games7;
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade7 == 10) {
      ctx.reply("Вертикаль 10 карт дилера меньше 8");
   }
}
   function reskef8() {
   request()
   trade = global.games;
   trade2 = global.games2;
   trade3 = global.games3;
   trade4 = global.games4;
   trade8 = global.games8;
   console.log(trade + ' ' + trade2 + ' ' + trade3 + ' ' + trade4);
   if (trade8 == 10) {
      ctx.reply("Вертикаль 10 карт дилера больше 8");
   }
}
  
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «Ниже/Выше 8» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin");
     
       global.time= setInterval(reskef, 30000)
       global.time2= setInterval(reskef2, 30000)
       global.time3= setInterval(reskef3, 30000)
       global.time4= setInterval(reskef4, 30000)
       global.time5= setInterval(reskef5, 120000)
       global.time6= setInterval(reskef6, 30000)
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
      clearInterval(time6);
  clearInterval(time7);
      clearInterval(time8);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

