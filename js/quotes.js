const quoteSpan = document.querySelector("#quotes span:first-child");
const authorSpan = document.querySelector("#quotes span:last-child");
const quotes = [{"quote":"수동이 아니라 능동적으로 살자.", "author":" - 서민준"}, 
{"quote":"슬럼프를 슬럼프라고 인식하지말고, 구체적인 단어로 인식하자.", "author":" - 서민준"},
{"quote":"하루의 시간은 모두 하나의 씨앗이 될 수 있다.", "author":" - 서민준"},
{"quote":"행동하지 않고 마음만 먹으니까 걱정이 찌는 것이다. 움직여라.", "author":" - 서민준"},
{"quote":"움직이는 육신은 움직이려하고, 쉬고있는 육신은 수많은 핑계를 생각해낸다.", "author":" - 서민준"},
{"quote":"살면서 뭘 해야 하지? 가 아니라, 내가 평생 추구할 나만의 가치는 뭐지? 라고 묻자.", "author":" - 서민준"},
{"quote":"안주하기보다 스스로 선택한 방향을 향해 나아갈 때 삶이 더 가치있다.", "author":" - 서민준"},
{"quote":"할 수 있는 게 거의 없는 것 같아도, 아무것도 하지 않은 것보다 더 큰 실수는 없다.", "author":" - 서민준"},
{"quote":"I'm supposed to be here. I deserve it.", "author":" - Anonymous"}];

const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
quoteSpan.innerText = randomQuotes.quote;
authorSpan.innerText = randomQuotes.author;