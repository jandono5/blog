const blogPosts = [
   {
    id: 3,
    top: "<div id='top'></div>",
    title: "A Brief Overview of Particle Swarm Optimisation",
    summary: "How can a flock of birds teach us how to find optimal solutions?",
    read_time: "Estimated Read Time: 5 minutes",
    content: 
    `
	<p>Social behaviour has been observed in animals for centuries[1]. This interaction is beneficial for multiple reasons and is mainly believed to have evolved for survival purposes[2]. For example, birds moving in a flock mitigate predation risk and increase efficiency in foraging.</p>

	<p>Designed in 1995 by James Kennedy and Russ Eberhart[3], Particle Swarm Optimisation (PSO) has been used extensively in a variety of search and optimisation problems. It's a metaheuristic algorithm that mimics social behaviour and builds on swarm intelligence, an AI paradigm where individuals co-operate locally to solve complex problems[4]. The operation of swarm intelligence is trivial: organisms can understand their environment better and faster by communicating to others about their own experiences. Within a multi-dimensional search space, co-existing subjects can iteratively infer their current state on other members and influence future movements. This has the potential to efficiently locate the minimum and maximum of all possible solutions in said search space.</p>

	<h3>Implementation</h3>

	<p>PSO is and always has been relatively simple to use. The paper introducing it even states that 'paradigms
	can be implemented in a few lines of computer code', and that it is 'computationally inexpensive in terms
	of both memory requirements and speed'[3].</p>

	<h4>Prerequisites</h4>

	<p>An individual particle is composed of three vectors and two fitness values:</p>

	<p class='bold'>Vectors</p>
	<ol>
		<li><strong>x-vector</strong> - The current position of the particle in the search space</li>
		<li><strong>v-vector</strong> - The velocity (direction and speed) the particle should travel in, if undisturbed</li>
		<li><strong>p-vector</strong> - The location of the best solution found so far by that particle</li>
	</ol>

	<p><strong>Fitness Values</strong></p>
	<ol>
		<li><strong>x-fitness</strong> - Records fitness of the x-vector</li>
		<li><strong>p-fitness</strong> - Records fitness of the p-vector</li>
	</ol>

	<p>All these components influence one another and continually update through each iteration of the algorithm. A particle \\(i\\) will move by adding its x-vector (\\(x_i\\)) to its v-vector (\\(v_i\\)). After moving, a new x-fitness value is taken. If this x-fitness is greater than all other p-fitness (\\(p_i\\)) values, this new location is saved as the current best for the particle in question.</p>

	<p>However, when calculating a new direction (v-vector), the particle is influenced both by that particle's particular history (\\(p_i\\)) as well as the current best from the fellow swarm (\\(p_g\\)). These values can be multiplied by constants (\\(c_1 , c_2\\)) to give biases, influencing how much attention is paid to either self-learnt bests (cognitive) or to be wholly reliant on the group (social). Finally, random values (\\(r_1, r_2\\)) are used to introduce stochasticity to the particle’s movement, aiming to ensure that all areas of the search space are accounted for. Formulas for updating both the v-vector and x-vector for a particle are as follows:</p>

	<p>\\[v_i \\leftarrow v_i + c_1 r_1 (p_i - x_i) + c_2 r_2 (p_g - x_i) \\\\ x_i \\leftarrow x_i + v_i\\]</p>

	<p>When implementing PSO, we start by creating basic variables such as the number of particles present, the number of iterations for the PSO to learn through, setting the inertia value, and outlining cognitive and social biases. We then go on to placing these particles randomly throughout our search space and setting random directions for them to move in. It's then a case of managing the best locations, both personally and across the swarm. This involves lots of comparisons and updating values when necessary.</p>

	<p>The code in its entirety, from PSO logic to visualisation can be viewed at <a href="https://github.com/jandono5/blog/blob/main/code/pso.py">this</a> link</p>

	<h3>Algorithm Evaluation</h3>

	<p>For simplicity's sake, I opted to evaluate this algorithm's performance on the commonly used <strong>Sphere Function</strong>. This function is defined as follows where input \\(X\\) is a vector of dimensions[5]:</p>

	<p>\\[f(X) = \\sum^d_{i=1} x_i^2\\]</p>
	
	<p>Though there are an arbitrary number of objective functions we could use to test the performance of PSO, this one makes life simple in that it's easy to visualise and it's clear that the global minimum will reside around \\(0\\), no matter the amount of dimensions.</p>

	<p>Using matplotlib's pyplot[6], we're able to visually assess how well this PSO algorithm does at locating the minimum of the sphere function across forty iterations (<strong>Figures 1 & 2</strong>).</p>

	<figure>
		<img src="img/pso/2DPSO.png" alt="2D Visualisation of PSO Across 40 Iterations" style="width:100%">
		<figcaption><strong>Figure 1:</strong> 2D Visualisation of PSO Across 40 Iterations</figcaption>
	</figure>
	<figure>
		<img src="img/pso/3DPSO.png" alt="3D Visualisation of PSO Across 40 Iterations" style="width:100%">
		<figcaption><strong>Figure 2:</strong> 3D Visualisation of PSO Across 40 Iterations</figcaption>
	</figure>

	<h3>Results</h3>

	<p>The sphere function was chosen due to its simplicity, as previously stated, but also because it completely eradicates the possibility of being stuck on local optima. This is an area that PSO algorithms are known to struggle with[7]. Though very efficient in some search and optimisation tasks, users should be wary that if social bias is set too high and the swarm's best location is not the global minimum / maximum, all other particles will converge, thus leaving the true 'best' choice unexplored and unaccounted for. An objective function that would hold more weight in demonstrating the true global optima of PSO should have an abundance of local optima, such as the Rastrigin function[8].</p>

	   <p>However, with that said, we shouldn’t simply forget about PSO. The visualisations from the sphere function evaluation illustrates that it has the ability to learn through social communication, though it’s down to the human to understand the mechanisms behind it and what values are best for cognitive and social parameters. After all, its foundation and inspiration are the reason it can be so effective. Kennedy and Eberhart put it best when introducing PSO: <em>'Why is social behavior so ubiquitous in the animal kingdom? Because it optimizes. What is a good way to solve engineering optimization problems? Modeling social behavior'</em>.</p>

	<h3>References</h3>

	<ol>
		<li>R. D. Alexander, “The evolution of social behavior,” Annual Review of Ecology and Systematics, vol. 5, pp. 325–383, 1974. [Online]. Available: <a href="https://www.jstor.org/stable/2096892" target="_blank">https://www.jstor.org/stable/2096892</a></li>
		<li>J. K. Parrish and W. M. Hamner, Eds., Animal Groups in Three Dimensions. Cambridge and New York: Cambridge University Press, 1997.</li>
		<li>J. Kennedy and R. Eberhart, “Particle swarm optimization,” in Proceedings of ICNN’95 - International Conference on Neural Networks, Perth, WA, Australia: IEEE, 1995.</li>
		<li>J. Kennedy, “Swarm intelligence,” in Handbook of Nature-Inspired and Innovative Computing: Integrating Classical Models with Emerging Technologies, New York: Springer Science + Business Media, 2006, ch. 6.</li>
		<li>Sphere Function — sfu.ca, <a href="https://www.sfu.ca/~ssurjano/spheref.html" target="_blank">https://www.sfu.ca/~ssurjano/spheref.html</a>, [Accessed 28-02-2026].</li>
		<li>Pyplot Documentation — matplotlib.org, <a href="https://matplotlib.org/stable/api/pyplot_summary.html" target="_blank">https://matplotlib.org/stable/api/pyplot_summary.html</a>, [Accessed 03-03-2026].</li>
		<li>M. Schmitt and R. Wanka, “Particle swarm optimization almost surely finds local optima,” Theoretical Computer Science, vol. 561, pp. 57–72, Jan. 2015. doi: <a href="https://doi.org/10.1016/j.tcs.2014.05.017" target="_blank">10.1016/j.tcs.2014.05.017</a>.</li>
		<li>Rastrigin Function — en.wikipedia.org, <a href="https://en.wikipedia.org/wiki/Rastrigin_function" target="_blank">https://en.wikipedia.org/wiki/Rastrigin_function</a>, [Accessed 04-03-2026].</li>
		<li>A. Tam, A Gentle Introduction to Particle Swarm Optimization — machinelearningmastery.com, <a href="https://machinelearningmastery.com/a-gentle-introduction-to-particle-swarm-optimization/" target="_blank">https://machinelearningmastery.com/a-gentle-introduction-to-particle-swarm-optimization/</a>, [Accessed 04-03-2026].</li>
		<li>Implementation of Particle Swarm Optimization — geeksforgeeks.org, <a href="https://www.geeksforgeeks.org/machine-learning/implementation-of-particle-swarm-optimization/" target="_blank">https://www.geeksforgeeks.org/machine-learning/implementation-of-particle-swarm-optimization/</a>, [Accessed 04-03-2026].</li>
	</ol>
	
	<p><a href="#top">Back to top</a></p>
    `,
    date: "May 20th, 2026"
   },
   {
    id: 2,
    top: "<div id='top'></div>",
    title: "Correctness and Reliability of LLMs",
    summary: "As new LLMs are released, do they become less intelligent than before?",
    read_time: "Estimated Read Time: 8 minutes",
    content: 
    `
    <p>We’ve all encountered moments where Large Language Models (LLMs) <span class="italic">hallucinate</span>, declaiming misinformation and disinformation at times, and with so many reliant on their output, it’s important to understand the consequences of blindly following whatever it states as fact. In this post, I’ll aim to break down what these large models are trained on and how, if no change occurs, either they cause their own demise, or we live in a world where objective correctness ceases to exist.</p>

    <h3>The Training Process</h3>

    <p>In a nutshell, LLMs are predictive machines. They take your input and generate the next best token based on whatever it was handed (token meaning a unit of text). As its operation is much more complex than regurgitating facts, there’s already room for error. I won’t go into too much depth as to how LLMs operate, but if you’re interested, my <a href="https://jandono5.github.io/blog/blog-entry.html?id=1" target="_blank">previous post</a> goes into a bit more detail.</p>

    <p>Here, it’s important to note the amount of data these models consume while being trained. Language models started out with their data being from a single source, such as Wikipedia (Merity et al., 2016), though companies now aim to harvest as large and diverse a dataset as possible, aiming to cover multiple examples of natural language in a variety of different contexts. One solution here is to use <span class="italic">Common Crawl</span>, a massive repository of web data that can be traversed by specialised crawlers, all created by a non-profit organisation that maintains it. These crawlers systematically scrape vast amounts of text and code from webpages, extracting content and data and converting it into clean formats that can be tokenised. Though this isn’t the entirety of what big models are trained on, it often makes up a large percentage, especially in the early iterations of LLMs such as GPT-2 (Radford et al., 2019).</p>

    <p>It’s hard to pinpoint exactly how much data is used in the training process, but it’s a good assumption that newer, more-accurate models require an excess of training data in comparison to its previous version. For example, OpenAI’s GPT-3 was trained on roughly 499 billion tokens (Brown et al., 2020) and though not explicitly stated by OpenAI, GPT-4 is estimated to have been trained on 13 trillion tokens. Additionally, GPT-2 has 1.5 billion parameters  (Laizure, 2024) while GPT-4 has a whopping 1.76 trillion parameters. Parameters are internal weights and biases the model has to define its knowledge, understanding and predictive ability – essentially, the more parameters the better! Based on these numbers, it’s clear that there’s a strong positive correlation between model release and training dataset size.</p>

    <h3>Accuracy of the World Wide Web</h3>

    <p>While being an incredibly useful resource at times, the web is infamous for being a haven of misinformation. To give a good idea of scale, ITU currently estimates that there are roughly <a href="https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx" target="_blank">six billion active internet users</a>, and as of the 15th of January 2025, the indexed web contains <a href="https://www.worldwidewebsize.com/#:~:text=Web%20(The%20Internet)-,The%20size%20of%20the%20World%20Wide%20Web%20(The%20Internet),%2C%2002%20March%2C%202022)." target="_blank">at least 3.98 billion pages</a> (<span class="italic">indexed</span> meaning the subset of the web where search engines have located and stored websites in their database making them searchable for users).</p>

    <p>This is a lot of information stored at our fingertips but we should always be wary that the content you’re consuming could either be partially or fully factually inaccurate. But why is this so? The simple answer is that a huge portion of these indexed pages are devised by LLMs, something that didn’t used to be an issue before the current AI Summer we’re experiencing.  For example, <a href="https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans" target="_blank">a recent report</a> from SEO company Graphite found that at one point, more than half of news articles were written by AI. Some would’ve produced accurate, fact-checkable content, though given the sheer amount of articles produced, by chance alone, just as many would produce pieces full of misstatements and falsehoods.</p>

    <p>In essence, by continually training from data on the web, LLMs are learning false patterns and information already created by its previous iterations.</p>

    <h3>The Danger of LLMs</h3>

    <p>At times, AI-generated content can be seen to be as good as, if not a higher quality compared to humans (Zhang and Gosline, 2023). Though I believe they do hold a place in certain scenarios, such as translation, it’s dangerous to completely fulfill trust in these machines. For example, though their formal competence is good, their functional competence is far from it. The paper ‘Dissociating Language and Thought in Large Language Models’ illustrates this very well (Mahowald et al., 2024). LLMs are great at getting the <span class="italic">form</span> of language right, but aren’t as good as applying this form to the real world. Given it’s constructed of silicon and metal, its world knowledge and spatial awareness isn’t as good as a humans, believe it or not. This leads us to the hazards around hallucinations.</p>

    <p>The machine is trained to make falsities sound plausible to the human observer, which is why it’s so hard to tell when a model outputs something completely fabricated. Many bad actors have utilised this fact and trained LLMs to purposefully spout disinformation. This became very apparent around the US elections in 2024 (Williams et al., 2025).</p>

    <p>As humans, we can’t help but ascribe human-like qualities to machines and confide in their company, especially if their behaviour exhibits as if they’re intelligent beings. We have to remember that these are not friends but tools. Blurring the lines between these two categories is where full-dependency starts to creep in, the start of a slippery slope where big corporations could potentially track conversations and influence decisions.</p>

    <h3>Could LLMs Ever be Fully Reliable?</h3>

    <p>In researching for this post, something I’m still not sure I understand is the confidence that these models possess, even when their output has no grounding. LLMs are machines and not sentient beings <a href="https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/" target="_blank">(though even that is up for debate)</a>, so are simply trying to fulfill their prompt they’ve been handed. If this were altered and made so disclaimers were output alongside content, I believe this could increase overall reliability.</p>

    <p>A more realistic short-term fix to mitigating hallucinations is to give an initial prompt before using an LLM. This, of course, isn’t groundbreaking news and people continue to try and develop different prompts, each one aiming to minimise false information more than the last. Weller et al. (2024) found that by ensuring the model’s output replicated what it learnt from its training data, the hallucinations decreased. Successful prompts include: <span class="italic">“Respond to this question using only information that can be attributed to Wikipedia”</span> and <span class="italic">“Respond by using information from Wikipedia in your response”</span>. As Wikipedia is a large base of training for LLMs, and primarily written by humans, this method guarantees there to be at least one credible source for its output. Of course, this method isn’t bullet-proof. If using a model unknowingly trained on false data for bad actor gain, the output would still be incorrect, unbeknownst to you.</p>

    <p>LLMs can be useful in certain scenarios, but in many cases they’re no more than sophisticated echo chambers of the web. Especially in this age where there’s an abundance of misinformation circling our media platforms, it’s vital to find important information first-hand with reliable sources rather than risk fabricated evidence that will only continue to confuse the general public. However, unless you’re immortal, it’s impossible to fact check everything. LLMs will learn from misinformation at times, but we humans aren’t much better. Leaving the robots out of it, we also struggle to separate fact from fiction. Before teaching artificial systems how to apply correctness to themselves, we have to figure out how to do it for us first.</p>

    <p>Continue using these artificial systems, but with each response you get, second-guess and keep in mind that what it states could be overwhelmingly wrong. After all, you wouldn’t <a href="https://www.bbc.co.uk/news/articles/cd11gzejgz4o" target="_blank">eat rocks</a> or <a href="https://mastodon.social/@JoeUchill/112493317168967705" target="_blank">put petrol in your spaghetti</a>, two things that this so-called advanced technology has advised us to do in recent years...</p>

    <h3>References</h3>

    <ol>

    	<li>Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D., Wu, J., Winter, C. and Hesse, C. (2020). Language Models are Few-Shot Learners. Available at: <a href="https://arxiv.org/pdf/2005.14165" target="_blank">https://arxiv.org/pdf/2005.14165</a></li>
	<li>Laizure, S.C. (2024). Caution: ChatGPT Doesn’t Know What You Are Asking and Doesn’t Know What It Is Saying. The Journal of Pediatric Pharmacology and Therapeutics, 29(5), pp.558–560. doi: <a href="https://doi.org/10.5863/1551-6776-29.5.558" target="_blank">https://doi.org/10.5863/1551-6776-29.5.558</a></li>
	<li>Mahowald, K., Ivanova, A.A., Blank, I.A., Kanwisher, N., Tenenbaum, J.B. and Fedorenko, E. (2024). Dissociating Language and Thought in Large Language Models. Trends in Cognitive Sciences, 28(6). doi: <a href="https://doi.org/10.1016/j.tics.2024.01.011" target="_blank">https://doi.org/10.1016/j.tics.2024.01.011</a></li>
	<li>Merity, S., Xiong, C., Bradbury, J. and Socher, R. (2016). Pointer Sentinel Mixture Models. arXiv (Cornell University). doi: <a href="https://doi.org/10.1016/j.tics.2024.01.011" target="_blank">https://doi.org/10.48550/arxiv.1609.07843</a></li>
	<li>Radford, A., Wu, J., Child, R., Luan, D., Amodei, D. and Sutskever, I. (2019). Language Models are Unsupervised Multitask Learners. Available at: <a href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf" target="_blank">https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf</a></li>
	<li>Weller, O., Marone, M., Weir, N., Lawrie, D., Khashabi, D. and Durme, B. (n.d.). "According to . . . ": Prompting Language Models Improves Quoting from Pre-Training Data. Available at: <a href="https://arxiv.org/pdf/2305.13252" target="_blank">https://arxiv.org/pdf/2305.13252</a></li>
	<li>Williams, A.R., Burke-Moore, L., Chan, R.S.-Y., Enock, F.E., Nanni, F., Sippy, T., Chung, Y.-L., Gabasova, E., Hackenburg, K. and Bright, J. (2025). Large language models can consistently generate high-quality content for election disinformation operations. PLOS ONE, 20(3), p.e0317421. doi: <a href="https://doi.org/10.1371/journal.pone.0317421" target="_blank">https://doi.org/10.1371/journal.pone.0317421</a></li>
	<li>Zhang, Y. and Gosline, R. (2023). Human favoritism, not AI aversion: People’s perceptions (and bias) toward generative AI, human experts, and human–GAI collaboration in persuasive content generation. Judgment and Decision Making, 18(1). doi: <a href="https://doi.org/10.1017/jdm.2023.37" target="_blank">https://doi.org/10.1017/jdm.2023.37</a></li>
    </ol>

    <p><a href="#top">Back to top</a></p>
    `,
    date: "January 24th, 2026"
  },
  {
    id: 1,
    top: "<div id='top'></div>",
    title: "LLMs for Dummies",
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
