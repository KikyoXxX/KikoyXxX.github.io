(function () {
    const fileName = decodeURIComponent(window.location.pathname.split('/').pop() || '').split('?')[0].toLowerCase();
    const bodyClassConfig = {
        sm: 'sakamaki.html',
        s: 'suzune.html',
        m: 'meu.html'
    };

    const characterConfig = {
        'sakamaki.html': {
            name: '逆巻',
            callImage: 'icon/sakamaki.png',
            npcImage: 'stand_img/sakamaki.png',
            callAudio: 'calling/skmk.wav',
            clickThreshold: 5,
            npcDialogue: {
                start: 'intro',
                nodes: {
                    intro: {
                        line: 'そんなに私と話したかったの？いいよ。付き合ってあげる。',
                        choices: [
                            { label: '他の子達のことを教えて', next: 'advice' },
                            { label: '逆巻のことを知りたい', next: 'about' }
                        ]
                    },
                    advice: {
                        lines: [
                                'へぇ....私じゃなくて、他の2人に興味があるんだ？',
                                'ふふ、なんてね。'
                        ],
                        next: 'adviceChoice'
                    },
                    adviceChoice: {
                        line: '誰のことを知りたいの？',
                        choices: [
                            { label: '愛生のことを教えて', next: 'meu' },
                            { label: '鈴音のことを教えて', next: 'suzune' }
                        ]
                    },
                    meu: {
                        lines:[
                            '愛生ちゃんはすごく良い子だよ。元気で明るいし、それでいて気も効く子だからね。',
                            '私がいつの間にかこの占い屋の手伝いをすることになっていたのも、あの子のあまりの邪気の無さについ流されちゃったからなんだ。',
                            'キミもあの子と話していたら、いつの間にかこの店の一員になっていたりするかもね。その時は歓迎してあげる。'
                        ],
                        next: 'endCalm'
                    },
                    suzune: {
                        lines:[
                            '鈴音は大人しいし、あまり人と関わろうとしないけれど、優しい子だよ。',
                            '優しいが故に人と関わることを恐れているだけで、話しかけられると本当は凄く嬉しいんじゃないかな。',
                            'キミもあの子には積極的に話しかけてあげてね。そうすれば次第に心を開いてくれると思うよ。',
                            '...私はあの子にうっすら嫌われている気がするけれど。'
                        ],
                        next: 'endCalm'
                    },
                    about: {
                         lines: [
                                '私のこと？',
                                'ふふ。随分と積極的だね。',
                ],
                        next: 'aboutChoice'
                    },
                    aboutChoice: {
                        line: 'いいよ。何でも教えてあげる。',
                        choices: [
                            { label: '好きなものは？', next: 'aboutlike' },
                            { label: '普段は何をしているの？', next: 'abouthobby' },
                            { label: 'どんな人なの？', next: 'aboutyou' },
                            { label: '秘密を教えて', next: 'aboutmore' }
                        ]
                    },
                    aboutlike: {
                         lines: [
                                'そうだな......急には思いつかないな。',
                                '強いて挙げるなら、お酒かな。',
                                'キミは？',
                                 ],
                        next: 'youlike'
                    },
                    youlike: {
                        line: 'キミの好きなものも知りたいな。',
                        choices: [
                            { label: '任意の食べ物', next: 'food' },
                            { label: '思いつかない', next: 'Noidea' },
                            { label: '逆巻', next: 'angry' }
                        ]
                    },
                    food: {
                        line: 'へー、そうなんだ。私も好きだよ。今度一緒に食べに行こうか。',
                        next: 'endCalm'
                    },
                    Noidea: {
                        line: '大人になるとそういうものだよね。好き嫌いの感覚が鈍くなっちゃう。',
                        next: 'endCalm'
                    },
                    angry: {
                        line: '私のことを「もの」扱いするなんて、良い度胸だね。',
                        next: 'endCalm'
                    },
                    abouthobby: {
                        lines: [
                                'その日によるかな。基本的にはだれかと一緒にいることが多いけど、自宅でぼんやりとしていることもある。',
                                '...こうして君と話しているのも、私にとっては楽しい趣味の一つだよ。',
                        ],
                        next: 'endCalm'
                    },
                    aboutyou: {
                        line:'それを私に聞く？自分がどんな人間かなんて、案外本人が一番わからないものじゃないかな。',
                        next: 'sakamakiimage'
                    },
                    sakamakiimage: {
                        line:"むしろ私がどんな人に見えているのか、君の考えの方が知りたいな。",
                        choices: [
                            { label: '優しい人', next: 'kind' },
                            { label: '怪しい人', next: 'mysterious' },
                            { label: '可愛い人', next: 'cute' },
                            { label: 'メロい人', next: 'lovely' }
                        ]
                    },
                    kind: {
                        line: 'ふふふ、大正解。私のことをよくわかってくれているね。',
                        next: 'endCalm'
                    },
                    mysterious: {
                        line: 'それは心外だな。もっとわたしのことをよく見てもらわないと。',
                        next: 'endCalm'
                    },
                    cute: {
                        line: '...それは想定外だったな。キミにはもう少し厳しくしても良いってことだね。',
                        next: 'endCalm'
                    },
                    lovely: {
                        line: '最近はよく言われるね。褒められてるなら、悪い気はしないな。意味はよくわからないけれど。',
                        next: 'endCalm'
                    },
                    aboutmore: {
                        lines: [
                                'いきなり秘密？欲張りだね。',
                                '本人の口から聞けるような秘密なんて、そんなもの最初から秘密じゃないさ。',
                                'キミ自身で暴いた方がきっと気持ちが良いよ？',
                                 ],
                        next: 'endCalm'
                    },
                    endCalm: {
                        lines: [
                                '今回はここまで。また私に会いに来てね。',
                                '...それとも、私をここから連れ出してくれてもいいけれど？',
                                'またね。',
                                 ]
                    }
                }
            }
        },
        'suzune.html': {
            name: '鈴音',
            callImage: 'icon/suzune.png',
            npcImage: 'stand_img/suzune.png',
            callAudio: 'calling/suzune.wav',
            clickThreshold: 5,
            npcDialogue: {
                start: 'intro',
                nodes: {
                     intro: {
                        line: '…つんつんするの、やめてください。何の用事ですか？',
                        choices: [
                            { label: '他の子達のことを教えて', next: 'advice' },
                            { label: '鈴音のことを知りたい', next: 'about' }
                        ]
                    },
                    advice: {
                        line:'いいですよ。',
                        next: 'adviceChoice'
                    },
                    adviceChoice: {
                        line: '誰について知りたいですか？？',
                        choices: [
                            { label: '愛生のことを教えて', next: 'meu' },
                            { label: '逆巻のことを教えて', next: 'sakamaki' }
                        ]
                    },
                    meu: {
                        lines:[
                            '愛生は、わたしの家族です。',
                            '退屈に過ごしていたわたしを占い屋に誘ってくれて、今は一緒に暮らしています。',
                            '明るくてとっても可愛い女の子です。あの子より素敵な子はこの世にいませんね。',
                            '誰にでも優しいので、きっとあなたも愛生のことを好きになっちゃうと思います。',
                            '……でも、とらないでくださいよ。'
                        ],
                        next: 'endCalm'
                    },
                    sakamaki: {
                        lines:[
                            'あぁ…。逆巻さんですか。',
                            '私達の占い屋を手伝ってくれている男の人です。愛生が即日で店長として任命したので、あの人が店長です。',
                            '私もあの人のことは詳しく知らないので、知りたいことがあったら本人に聞いてください。',
                            'ついでに、あなたが彼を引き取って行ってくれませんか？…いや、流石にそれは愛生が悲しむかな。'
                        ],
                        next: 'endCalm'
                    },
                    about: {
                         lines: [
                                '私のことですか？',
                                'まぁ…いいですけど。',
                ],
                        next: 'aboutChoice'
                    },
                    aboutChoice: {
                        line: '答えられることなら、答えます。',
                        choices: [
                            { label: '好きなものは？', next: 'aboutlike' },
                            { label: '普段は何をしているの？', next: 'abouthobby' },
                            { label: 'どんな人なの？', next: 'aboutyou' },
                            { label: '秘密を教えて', next: 'aboutmore' }
                        ]
                    },
                    aboutlike: {
                         lines: [
                                '特にないです。',
                                '...愛生？',
                                '愛生はモノじゃないので。別枠です。',
                                 ],
                        next: 'endCalm'
                    },
                    abouthobby: {
                        lines: [
                                '大学に通っています。',
                                'あと、ここに来ている以上はご存知でしょうけど、愛生に誘われて占い屋もやってます。',
                        ],
                        next: 'endCalm'
                    },
                    aboutyou: {
                        line:'どんな人…。そういうの、結構難しいです。',
                        next: 'suzuneimage'
                    },
                    suzuneimage: {
                        line:"あなたに私はどう見えていますか？",
                        choices: [
                            { label: '優しい子', next: 'kind' },
                            { label: '暗い子', next: 'mysterious' },
                            { label: '可愛い子', next: 'cute' },
                            { label: 'ツンデレ', next: 'lovely' }
                        ]
                    },
                    kind: {
                        lines:['そうですか。そう思ってもらえているなら、嬉しいです。',
                            '...なんだか気を遣わせてしまったようで、申し訳ないです。',
                        ],
                        next: 'endCalm'
                    },
                    mysterious: {
                        lines:['おお…。自覚済みですが、他の人から面と向かって言われるとドキッとしますね。',
                            '気を遣われるより、余程落ち着きます。ありがとうございます。',
                        ],
                        next: 'endCalm'
                    },
                    cute: {
                        line: '……そういうの、いらないです。',
                        next: 'endCalm'
                    },
                    lovely: {
                        line: 'それは違うと思います。',
                        next: 'endCalm'
                    },
                    aboutmore: {
                        lines: [
                                '秘密なんてありません。',
                                '…本当ですよ。',
                               
                                 ],
                        next: 'endCalm'
                    },
                    endCalm: {
                        lines: [
                                '話しかけてくれてありがとうございました。',
                                '……。',
                                '気が向いたらでいいので、また…いや、なんでもないです。さようなら。',
                                 ]
                    }
                }
            }
        },
        'meu.html': {
            name: '愛生',
            callImage: 'icon/meu.png',
            npcImage: 'stand_img/meu.png',
            callAudio: 'calling/meu.wav',
            clickThreshold: 5,
            npcDialogue: {
                start: 'intro',
                nodes: {
                    intro: {
                        line: 'わーい！！話しかけてもらえるの、待ってたの！！',
                         choices: [
                            { label: '他の子達のことを教えて', next: 'advice' },
                            { label: '愛生のことを知りたい', next: 'about' }
                        ]
                    },
                    advice: {
                        line:'もちろん！めうが2人のこと教えてあげるの！',
                        next: 'adviceChoice'
                    },
                    adviceChoice: {
                        line: '誰について聞きたいの？',
                        choices: [
                            { label: '鈴音のことを教えて', next: 'suzune' },
                            { label: '逆巻のことを教えて', next: 'sakamaki' }
                        ]
                    },
                    suzune: {
                        lines:[
                            '鈴音はめうの大切な家族なの！！',
                            'めうにとっても優しくて、可愛がってくれる、お姉ちゃんみたいな人。一緒にいてすごく楽しいんだよ！',
                            'でも、鈴音は寂しがりやだからめうがずっとそばにいてあげないとだめなのよ。',
                            '今度、鈴音も一緒に3人、いや店長も誘って4人でお話ししよ！',
                        ],
                        next: 'endCalm'
                    },
                    sakamaki: {
                        lines:[
                            '店長のことね！',
                            'めう達の占い屋さんをお手伝いしてくれるとっても優しいお兄さんなの。',
                            'お店にはいたりいなかったり、普段はふらふら〜としてるけど、困った時は頼りになってかっこいいんだよ！',
                            'きっと君にも優しくしてくれるの。'
                        ],
                        next: 'endCalm'
                    },
                    about: {
                         line:'めうに興味津々なのね！',
                        next: 'aboutChoice'
                    },
                    aboutChoice: {
                        line: 'なんでも教えてあげちゃうよ！',
                        choices: [
                            { label: '好きなものは？', next: 'aboutlike' },
                            { label: '普段は何をしているの？', next: 'abouthobby' },
                            { label: 'どんな人なの？', next: 'aboutyou' },
                            { label: '秘密を教えて', next: 'aboutmore' }
                        ]
                    },
                    aboutlike: {
                         lines: [
                                'ふわふわでかわいいものが好き！',
                                'ぬいぐるみとか、ねこちゃんとか？',
                                'すずねも好き！店長も好き！',
                                'あと、梅も好き！',
                                '君のことも大好き！'
                                 ],
                        next: 'youlike'
                    },
                    youlike: {
                        line: '君は何が好きなの？',
                        choices: [
                            { label: '任意の食べ物', next: 'food' },
                            { label: '思いつかない', next: 'Noidea' },
                            { label: '愛生', next: 'happy' }
                        ]
                    },
                    food: {
                        line: '美味しそう！今度食べるときは、めうにもちょっと分けてほしいの。',
                        next: 'endCalm'
                    },
                    Noidea: {
                        line: 'じゃあ、めうの好きなものを君の好きなものにしていいよ！お揃いにしよ！',
                        next: 'endCalm'
                    },
                    happy: {
                        line: 'えへへ、そうしそうあい！',
                        next: 'endCalm'
                    },
                    abouthobby: {
                        lines: [
                                '占い屋さんでお仕事してるの。お客さんが占いを聞きに来るから、占ってあげて、後からその占い通りの未来になるようにめう達がこっそりお手伝いしに行ってるんだ。',
                                'あ、これはナイショの話だった…。',
                        ],
                        next: 'endCalm'
                    },
                    aboutyou: {
                        line:'どんな人…？？うーん…。わからないかも…。',
                        next: 'meuimage'
                    },
                    meuimage: {
                        line:"めうって、どんな人に見えてる？",
                        choices: [
                            { label: '優しい子', next: 'kind' },
                            { label: '元気な子', next: 'powerful' },
                            { label: '可愛い子', next: 'cute' },
                            { label: '強い子', next: 'strong' }
                        ]
                    },
                    kind: {
                        line: 'んふふ〜嬉しいなぁ〜！君がめうに優しくしてくれるから、めうも君にたくさん優しくしたいな〜って思ってるの。',
                        next: 'endCalm'
                    },
                    powerful: {
                        line: 'たしかに！一番しっくり来るかも！みんなに、元気だねって言われるの。めうはいっつも充電満タンだからね！',
                        next: 'endCalm'
                    },
                    cute: {
                        line: 'えへっ。よく言われるの。すずねがいつもかわいいかわいいって言いながら撫で回してくるから、きっとめうはとってもかわいいのね。',
                        next: 'endCalm'
                    },
                    strong: {
                        line: 'おぉー！！めうの強さに気づくなんて、才能あるのよ！！めう、すーっごい強いのに、みんなには信じてもらえないのよ…。',
                        next: 'endCalm'
                    },
                    aboutmore: {
                        lines: [
                                '秘密……？？',
                                'うーん。',
                                '考えてみたけど、思いつかないの。めうは隠し事とかできないのよ。',
                                 ],
                        next: 'endCalm'
                    },
                    endCalm: {
                        lines: [
                                '話しかけてくれてありがとう！',
                                'まだまだ話したいけど、そろそろお仕事に戻らないといけないの。',
                                '絶対にまた来てね！待ってるよ！',
                                 ]
                    }
                }
            }
        }
    };

    const path = characterConfig[fileName]
        ? fileName
        : Array.from(document.body.classList)
            .map((className) => bodyClassConfig[className.toLowerCase()])
            .find((configPath) => configPath);
    const config = characterConfig[path];
    if (!config) {
        return;
    }

    const portrait = document.querySelector('.profile > .image-box img');
    const callButton = document.querySelector('[data-call-character]');

    const overlay = document.createElement('section');
    overlay.className = 'rpg-dialog-overlay';
    overlay.innerHTML = [
        '<div class="rpg-dialog-stage" role="dialog" aria-modal="true" aria-label="キャラクター会話">',
        '  <div class="rpg-phone-header">',
        '    <p class="rpg-phone-title">通話</p>',
        '    <p class="rpg-call-state" aria-live="polite"></p>',
        '  </div>',
        '  <div class="rpg-dialog-portrait-wrap">',
        '    <img class="rpg-dialog-portrait" alt="キャラクター立ち絵">',
        '  </div>',
        '  <div class="rpg-dialog-box">',
        '    <p class="rpg-dialog-name"></p>',
        '    <p class="rpg-dialog-line"></p>',
        '    <div class="rpg-dialog-choices" aria-live="polite"></div>',
        '    <button type="button" class="rpg-dialog-next">次へ</button>',
        '  </div>',
        '  <button type="button" class="rpg-call-end" aria-label="通話を終了する"></button>',
        '</div>'
    ].join('');
    document.body.appendChild(overlay);

    const stage = overlay.querySelector('.rpg-dialog-stage');
    const overlayPortrait = overlay.querySelector('.rpg-dialog-portrait');
    const callStateLabel = overlay.querySelector('.rpg-call-state');
    const nameLabel = overlay.querySelector('.rpg-dialog-name');
    const lineLabel = overlay.querySelector('.rpg-dialog-line');
    const choicesWrap = overlay.querySelector('.rpg-dialog-choices');
    const nextButton = overlay.querySelector('.rpg-dialog-next');
    const callEndButton = overlay.querySelector('.rpg-call-end');

    let activeLines = [];
    let activeIndex = 0;
    let npcNodes = null;
    let npcCurrentNodeId = '';
    let currentMode = 'call';
    let callTimeoutId = null;
    let isCallSequenceRunning = false;
    let callAudio = null;

    function stopCallAudio() {
        if (!callAudio) {
            return;
        }

        callAudio.pause();
        callAudio.currentTime = 0;
        callAudio = null;
    }

    function playCallAudio() {
        stopCallAudio();
        if (!config.callAudio) {
            return;
        }

        callAudio = new Audio(config.callAudio);
        callAudio.play().catch(function () {
            callAudio = null;
        });
    }

    function updatePortrait(mode) {
        if (!overlayPortrait) {
            return;
        }

        const configuredImage = mode === 'npc' ? config.npcImage : config.callImage;
        overlayPortrait.src = configuredImage || (portrait && (portrait.currentSrc || portrait.src)) || '';
    }

    function setMode(mode) {
        currentMode = mode;
        overlay.classList.remove('is-mode-call', 'is-mode-npc');
        overlay.classList.add(mode === 'npc' ? 'is-mode-npc' : 'is-mode-call');
        updatePortrait(mode);
    }

    function openOverlay(mode) {
        setMode(mode);
        overlay.classList.add('is-visible');
        document.body.classList.add('rpg-dialog-open');
    }

    function showNextButton() {
        nextButton.classList.remove('is-hidden');
    }

    function hideNextButton() {
        nextButton.classList.add('is-hidden');
    }

    function resetNextButtonLabel() {
        nextButton.textContent = '次へ';
    }

    function clearChoices() {
        choicesWrap.innerHTML = '';
    }

    function addChoiceButton(choice) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'rpg-dialog-choice';
        button.textContent = choice.label;
        button.addEventListener('click', function () {
            if (!choice.next) {
                closeDialogue();
                return;
            }
            npcCurrentNodeId = choice.next;
            renderNpcNode();
        });
        choicesWrap.appendChild(button);
    }

    function clearCallSequence() {
        if (callTimeoutId !== null) {
            window.clearTimeout(callTimeoutId);
            callTimeoutId = null;
        }
        stopCallAudio();
        isCallSequenceRunning = false;
    }

    function renderNpcNode() {
        if (!npcNodes || !npcCurrentNodeId || !npcNodes[npcCurrentNodeId]) {
            closeDialogue();
            return;
        }

        const node = npcNodes[npcCurrentNodeId];
        activeLines = Array.isArray(node.lines) ? node.lines : [node.line || ''];
        activeIndex = 0;
        nameLabel.textContent = node.name || config.name;
        lineLabel.textContent = activeLines[activeIndex];
        clearChoices();

        if (node.choices && node.choices.length > 0) {
            hideNextButton();
            node.choices.forEach(addChoiceButton);
            return;
        }

        showNextButton();
    nextButton.textContent = activeLines.length > 1 || node.next ? '次へ' : '会話終了';
    }

    function openNpcDialogue(dialogue) {
        if (!dialogue || !dialogue.start || !dialogue.nodes) {
            return;
        }

        npcNodes = dialogue.nodes;
        npcCurrentNodeId = dialogue.start;
        activeLines = [];
        activeIndex = 0;
        clearChoices();
        resetNextButtonLabel();
        clearCallSequence();
        stage.classList.remove('is-calling', 'is-ring-flash', 'is-connected');
        callStateLabel.textContent = '';
        openOverlay('npc');
        renderNpcNode();
    }

    function closeDialogue() {
        clearCallSequence();
        stage.classList.remove('is-calling', 'is-connected', 'is-ring-flash');
        overlay.classList.remove('is-mode-call', 'is-mode-npc');
        npcNodes = null;
        npcCurrentNodeId = '';
        callStateLabel.textContent = '';
        nameLabel.textContent = '';
        lineLabel.textContent = '';
        clearChoices();
        resetNextButtonLabel();
        hideNextButton();
        overlay.classList.remove('is-visible');
        document.body.classList.remove('rpg-dialog-open');
    }

    function showNextLine() {
        if (currentMode === 'npc') {
            if (!npcNodes || !npcCurrentNodeId || !npcNodes[npcCurrentNodeId]) {
                closeDialogue();
                return;
            }

            const node = npcNodes[npcCurrentNodeId];
            if (node.choices && node.choices.length > 0) {
                return;
            }

            if (activeIndex < activeLines.length - 1) {
                activeIndex += 1;
                lineLabel.textContent = activeLines[activeIndex];
                return;
            }

            if (!node.next) {
                closeDialogue();
                return;
            }

            npcCurrentNodeId = node.next;
            renderNpcNode();
            return;
        }

        activeIndex += 1;
        if (activeIndex >= activeLines.length) {
            closeDialogue();
            return;
        }
        lineLabel.textContent = activeLines[activeIndex];
    }

    function startCallSequence() {
        let ringCount = 0;
        const maxRings = 8;

        clearCallSequence();
        playCallAudio();
        isCallSequenceRunning = true;
        openOverlay('call');
        stage.classList.remove('is-connected');
        stage.classList.add('is-calling');
        hideNextButton();
        nameLabel.textContent = config.name;
        lineLabel.textContent = '接続を待っています...';

        function runRing() {
            if (!isCallSequenceRunning) {
                return;
            }

            ringCount += 1;
            callStateLabel.textContent = '呼び出し中' + '.'.repeat((ringCount % maxRings) + 1);
            stage.classList.toggle('is-ring-flash');

            if (ringCount >= maxRings) {
                callTimeoutId = window.setTimeout(function () {
                    if (!isCallSequenceRunning) {
                        return;
                    }
                    stage.classList.remove('is-calling');
                    stage.classList.add('is-connected');
                    callStateLabel.textContent = '通話中';
                }, 360);
                return;
            }

            callTimeoutId = window.setTimeout(runRing, 760);
        }

        callTimeoutId = window.setTimeout(runRing, 300);
    }

    if (callButton) {
        callButton.addEventListener('click', function () {
            startCallSequence();
        });
    }

    let clickCount = 0;
    if (portrait) {
        portrait.addEventListener('click', function () {
            clickCount += 1;
            if (clickCount >= config.clickThreshold) {
                clickCount = 0;
                openNpcDialogue(config.npcDialogue);
            }
        });
    }

    nextButton.addEventListener('click', showNextLine);
    callEndButton.addEventListener('click', closeDialogue);

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeDialogue();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (!overlay.classList.contains('is-visible')) {
            return;
        }
        if (event.key === 'Escape') {
            closeDialogue();
        }
        if (isCallSequenceRunning && currentMode === 'call') {
            return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showNextLine();
        }
    });
})();

(function () {
    document.querySelectorAll('[data-video-reel]').forEach(function (reel) {
        const track = reel.querySelector('.video-reel-track');
        const slides = Array.from(reel.querySelectorAll('[data-reel-slide]'));
        const previousButton = reel.querySelector('[data-reel-prev]');
        const nextButton = reel.querySelector('[data-reel-next]');
        const dots = reel.querySelector('[data-reel-dots]');
        const counter = reel.querySelector('[data-reel-counter]');
        let currentIndex = 0;

        if (!track || !slides.length || !previousButton || !nextButton || !dots) {
            return;
        }

        slides.forEach(function (slide, index) {
            slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'video-reel-dot';
            dot.setAttribute('aria-label', (index + 1) + '本目の動画を表示');
            dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            dot.addEventListener('click', function () {
                showSlide(index);
            });
            dots.appendChild(dot);
        });

        function showSlide(index) {
            currentIndex = (index + slides.length) % slides.length;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            slides.forEach(function (slide, slideIndex) {
                slide.setAttribute('aria-hidden', slideIndex === currentIndex ? 'false' : 'true');
            });
            Array.from(dots.children).forEach(function (dot, dotIndex) {
                dot.setAttribute('aria-selected', dotIndex === currentIndex ? 'true' : 'false');
            });
            previousButton.disabled = slides.length < 2;
            nextButton.disabled = slides.length < 2;
            if (counter) {
                counter.textContent = (currentIndex + 1) + ' / ' + slides.length;
            }
        }

        previousButton.addEventListener('click', function () {
            showSlide(currentIndex - 1);
        });
        nextButton.addEventListener('click', function () {
            showSlide(currentIndex + 1);
        });
        reel.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showSlide(currentIndex - 1);
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                showSlide(currentIndex + 1);
            }
        });

        showSlide(0);
    });
})();

 const secretToggle = document.querySelector('.secret-toggle');
    const ageCheck = document.querySelector('#age-check');
    const secretContent = document.querySelector('#secret-content');
    const secretConfirm = document.querySelector('.secret-confirm');
    const ageCheckCancel = document.querySelector('.age-check-cancel');

    secretToggle.addEventListener('click', () => {
        ageCheck.hidden = false;
        secretToggle.setAttribute('aria-expanded', 'true');
    });

    secretConfirm.addEventListener('click', () => {
        ageCheck.hidden = true;
        secretContent.hidden = false;
        secretToggle.hidden = true;
    });

    ageCheckCancel.addEventListener('click', () => {
        ageCheck.hidden = true;
        secretToggle.setAttribute('aria-expanded', 'false');
    });

    const appendToggle = document.querySelector('.append-toggle');
    const appendContent = document.querySelector('#append-content');

    if (appendToggle && appendContent) {
        appendToggle.addEventListener('click', () => {
            const isOpen = appendContent.hidden;
            appendContent.hidden = !isOpen;
            appendToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    document.querySelectorAll('[data-append-tab]').forEach((tab) => {
        tab.addEventListener('click', () => {
            const selectedPanel = tab.dataset.appendTab;

            document.querySelectorAll('[data-append-tab]').forEach((item) => {
                item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
            });
            document.querySelectorAll('[data-append-panel]').forEach((panel) => {
                panel.hidden = panel.id !== selectedPanel;
            });
        });
    });
