const blogPosts = [
  {
    id: 1,
    top: "<div id='top'></div>",
    title: "LLMs for Dummies",
    image: "img/learning.jpg",
    summary: "Learning about the LLM from the ground up.",
    read_time: "Estimated Read Time: 10 minutes",
    content: 
    `
    <p>What is a Large Language Model (LLM)? I'd say most people could have a good stab at that question and their answer would likely include the words <span class="bold">ChatGPT</span> or <span class="bold">Gemini</span>. I'm of course aware of the household chatbots and understand on the surface how they operate but I'm curious as to how this revolutionary subset of AI functions under the hood. How did it all begin? What were the key breakthroughs that allowed this technology to turn into what we know it as today?</p>

    <p>This is the first topic I want to delve into as it currently seems to be the most popular form of AI, and I'm sure it's something that a lot of people can relate to. These chatbots have become part of everyday life for a lot of people but many, including myself, don't even know how they work (a poor confession from a Computer Science student).</p>

    <p>My queries going into this include what its origins are, how they operate at a fundamental level and what the future of LLMs look like, as well as any possible pitfalls.</p>

    <h3>Origins</h3>
    <p>As expected, the LLM is all about language. More specifically, it focuses on the patterns of meaning in language and bridges the gap between computation and human communication.</p>

    <p>The start of LLMs can be seen to go all the way back to 1883 with French philologist <span class="bold">Michel Bréal</span>. As well as being the creator of the marathon race that we know it today, he is also recognised as the founder of modern semantics (the study of meaning in language). In 1916, Swiss linguist <span class="bold">Ferdinand de Saussure</span>'s <span class="italic">Cours de Linguistique Générale</span> (Course of General Linguistics) was posthumously published which laid the groundwork for Natural Language Processing (NLP) (De Saussure, 1959). The aim of NLP is to translate human communication into a way that computers can understand, and then back again. It's a field of study that sees languages as functional systems, as opposed to cultural expression.</p>

    <p>After WWII, the want for language translation machines was prevalent, though as expected proved very difficult to implement. However, mathematics was already a universal language and proved great bedrock for these machines to be built on.</p>

    <p>Funding for this language-based technology ebbed and flowed and in 1966, <span class="bold">Joseph Weizenbaum</span> created <span class="bold">ELIZA</span>, a computational psychiatrist and the first program seen as directly implementing NLP. This was a creation based off Weizenbaum's theory that communication between a human and machine was shallow, purely operating to reflect the human's input to create conversation. This led to a machine laden in question-based responses. Even though ELIZA didn't allow for in-depth, sophisticated conversation, users often felt very human emotions towards it. A web-based version of ELIZA can be used <a href="https://anthay.github.io/eliza.html" target=”_blank”>here</a>.</p>

    <p>By the 1980s, <span class="bold">IBM</span> had started creating Small Language Models (SLM). These were trained on small sets of data, namely transcribed speech, and could complete limited text prediction and were in the early stages of machine translation. Though not the big, powerful chatbots we use today, these machines gave us insight that this type of technology could be highly beneficial.</p>

    <p>As compute power advanced rapidly, SLMs were able to be trained at much faster, more efficient rates, and when the internet came around, they suddenly had a vast, sophisticated dataset they could be openly trained on. By the 2010s, Deep Learning and other advances in surrounding technologies had allowed these language models to become so advanced that they gave us what are now known as Large Language Models. Developments in this field, such as the introduction of the <span class="bold">transformer architecture</span>, improved <span class="bold">attention mechanisms</span> and increased overall scale has allowed the LLM to truly flourish, giving us the household names such as ChatGPT, Gemini, Claude, and so on.</p>

    <h3>Basic Operation</h3>
    <p>LLMs use text prediction to generate responses prompted by user input. A solid understanding of how this works can be found in the revolutionary paper <span class="italic">Attention Is All You Need</span> (Vaswani et al., 2017), or for those that favour visual learning, <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank">Grant Sanderson's (3Blue1Brown)</a> video series on YouTube. Trying to simplify as much as possible, this is the basic operational process transformer-based LLMs go through to generate text (to my limited understanding at least):</p>

    <ol>
      <li><span class="bold">Tokenisation</span> – Training data is fed into the model and broken down into <span class="italic">tokens</span> through a process known as tokenisation (tokens could be words, parts of words or even individual characters).</li>
      <li><span class="bold">Embedding</span> – Each token is assigned a high dimensional vector that captures its basic semantic meaning.
        <ul>
          <li><span class="bold">Positional Encoding</span> – Positional information is added to the embeddings so the model is aware of the order of tokens.</li>
        </ul>
      </li>
      <li><span class="bold">Attention Block</span> – Vectors are updated based on their relation to other tokens. This allows for:
        <ul>
          <li>Dynamic Weighting – Giving higher importance to tokens that are more relevant based on current context.</li>
          <li>Long-range Dependency – Allowing each token to affect all others.</li>
          <li>Contextual Understanding – Resolving ambiguities (e.g. homonyms) by using surrounding tokens.</li>
        </ul>
      </li>
      <li><span class="bold">Multilayer Perceptron (MLP)</span> – While the attention block handles relationships between tokens, the MLP processes the individual token’s information, adjusting its vector value based on information gained from the attention block.</li>
      <li><span class="bold">Repetition</span> – Vectors are passed through the attention and MLP layers numerous times, allowing the model to build context-rich, intelligent language.</li>
      <li><span class="bold">Output</span> – After the final repetition, a vector of logits is produced for each possible next token. A softmax function turns these logits into a normalised probability distribution, and the token with the highest probability will <span class="italic">typically</span> be chosen as the next output token.</li>
    </ol>

    <p>As previously stated, this is a step-by-step operation for a transformer based LLM. Google's 2017 paper <span class="italic">Attention Is All You Need</span> (Vaswani et al., 2017) outlined this architecture and created a new standard within the LLM community. Before this breakthrough, architectures for LLMs included <span class="bold">Recurrent Neural Networks (RNN)</span> and <span class="bold">Convolutional Neural Networks (CNN)</span>. RNN is sequential in processing meaning it can only handle one word at a time (tokens don't have global effect on future predictions) and CNNs struggled to understand order. The transformer-based architecture solved these issues by incorporating both its attention block and MLP.</p>

    <p>One final concept on the fundamental operation of how LLMs operate is <span class="bold">distillation</span>. This is a practice where the core performance of an LLM is extracted and simplified so it can perform as the basis of a completely new language model. This allows developers to get the same results from enormous models at a much smaller price point – something <a href="https://www.bbc.co.uk/news/articles/c9vm1m8wpr9o" target="_blank">OpenAI accused DeepSeek of at the start of this year</a>.</p>

    <h3>The Future of LLMs & Possible Downfalls</h3>
    <p>Like any form of AI, LLMs will only become more powerful as we go on. More companies will use chatbots as part of their platform to 'enhance' customer services, law firms will incorporate its uses to speed up monotonous drafting tasks (Hadi et al., 2024) and inboxes will continue to categorise emails based on its contents. LLMs are used extensively in the world of code generation, one of the many contributions that gave them life in the first place. They're already writing code for other AI systems, and this is expected to play an increasingly significant role in their development. Given this notion, there's every chance that the next major LLM will be trained and tested by a fellow LLM.</p>

    <p>I've spoken grandly of this form of AI for some time now, so I'd feel it right to cover a couple pitfalls and rooms for improvement, so to speak. An area LLMs still need to better in is <span class="bold">literature review research</span>. Due to its operation simply being enhanced text prediction, if one were to automate tasks such as identifying relevant written material and summarising content, the model could in theory produce fake references and provide sources that don't exist. This could lead to mass misinformation and incorrect conclusions which could be harmful, especially in the scientific community.</p>

    <p>One final point on LLMs is their <span class="bold">environmental impact</span>. Though their uses are vast and impressive, the amount of water and energy they require to operate is large. Like all major forms of AI, the water necessary to cool data centres is shocking. For example, DeepSeek-R1 uses 150ml of water per query. This doesn't seem like a large sum in isolation but across a year the impact is substantial. Going to another model, it's estimated that across a year, someone using GPT-4o at an average rate of 8 queries per day could use between 1,334,991kL and 1,579,680kL of water (Jegham et al., 2025). You may be thinking that though this does seem a lot, it's okay because water can be recycled. However, this is not the case. These statistics refer to water that's evaporated during cooling and permanently removed from freshwater ecosystems.</p>

    <p>Though this technology has vast history and is by all means revolutionary, going forward I hope that more efficient ways of operation are developed to get the same performance out of LLMs without its excess in overall consumption. Who knows what it will produce next, only we as the user can prompt that.</p>

    <h3>References</h3>
    <ol>
      <li>De Saussure, F., 1959. <span class="italic">Course in General Linguistics</span>. Translated by W. Baskin. New York: Philosophical Library.</li>
      <li>Jegham, N., Abdelatti, M., Elmoubarki, L. and Hendawi, A., 2025. How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference. Available at: <a href="https://arxiv.org/html/2505.09598v1#S6" target="_blank">https://arxiv.org/html/2505.09598v1#S6</a></li>
      <li>Hadi, U., Tashi, Q., Qureshi, R., Shah, A., Muneer, A., Irfan, M., Zafar, A., Shaikh, M., Akhtar, N., Hassan, S., Shoman, M., Wu, J., Mirjalili, S. and Shah, M., 2024. LLMs: A Comprehensive Survey of Applications, Challenges, Datasets, Limitations, and Future Prospects. Available at: <a href="https://www.techrxiv.org/users/618307/articles/682263-large-language-models-a-comprehensive-survey-of-its-applications-challenges-limitations-and-future-prospects" target="_blank">https://www.techrxiv.org</a></li>
      <li>Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, L. and Polosukhin, I. (2017). <span class="italic">Attention Is All You Need</span>. Cornell University. Available at: <a href="https://arxiv.org/abs/1706.03762" target="_blank">https://arxiv.org/abs/1706.03762</a></li>
    </ol>

    <p><a href="#top">Back to top</a></p>
    `
    ,
    date: "September 8th, 2025"
  }
];
