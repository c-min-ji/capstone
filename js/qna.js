/*
var q1 = {

}
*/
/*var jData = JSON.parse(str);
	for(var i=0;i<jData.length;i++){
		var qnaList = jData[i];
		console.log('******************************');
		console.log(qnaList.a);
	} */
const qnaList = [{
    q: '당신의 성별은?',
    a: [{
            answer:'남',
            score: 10
        },
        {
            answer:'여',
            score: 10
        },
        {
            answer:'비밀',
            score: 10
        }
    ]
},
{
    q: '당신의 나이는?',
    a: [{
            answer: '0-9세',
            score: 5
        },
        {
            answer: '10-19세',
            score: 7
        },
        {
            answer: '20-29세',
            score: 9
        },
        {
            answer: '30-39세',
            score: 8
        },
        {
            answer: '40-100세',
            score: 6
        }
    ]
},
{
    q: '당신의 띠는?',
    a: [{
            answer: '쥐🐭',
            score: 9
        },
        {
            answer: '소🐮',
            score: 8
        },
        {
            answer: '호랑이🐯',
            score: 7
        },
        {
            answer: '토끼🐰',
            score: 6
        },
        {
            answer: '용🐲',
            score: 5
        },
        {
            answer: '뱀🐍',
            score: 9
        },
        {
            answer: '말🐴',
            score: 8
        },
        {
            answer: '양🐏',
            score: 7
        },
        {
            answer: '원숭이🐒',
            score: 6
        },
        {
            answer: '닭🐔',
            score: 5
        },
        {
            answer: '개🐶',
            score: 9
        },
        {
            answer: '돼지🐷',
            score: 8
        }
    ]
},
{
    q: '당신이 믿는 종교는?',
    a: [{
            answer: '기독교',
            score: 9
        },
        {
            answer: '불교',
            score: 8
        },
        {
            answer: '천주교',
            score: 8
        },
        {
            answer: '없음',
            score: 9
        }
    ]
},
{
    q: '당신의 현재 방 벽지 색은?',
    a: [{
            answer: '톤다운된 어두운 색',
            score: 9
        },
        {
            answer: '어두운 색이지만 무늬가 있다',
            score: 8
        },
        {
            answer: '화사하게 밝은 색',
            score: 7
        },
        {
            answer: '밝은 색 배경에 작은 무늬가 있다.',
            score: 6
        },
        {
            answer: '밝은 색 배경에 큰 무늬가 있다.',
            score: 5
        }
    ]
},
{
    q: '당신의 별자리는?',
    a: [{
            answer: '염소자리',
            score: 9
        },
        {
            answer: '물병자리',
            score: 8
        },
        {
            answer: '물고기자리',
            score: 7
        },
        {
            answer: '궁수자리',
            score: 6
        },
        {
            answer: '전갈자리',
            score: 5
        },
        {
            answer: '천칭자리',
            score: 9
        },
        {
            answer: '처녀자리',
            score: 8
        },
        {
            answer: '사자자리',
            score: 7
        },
        {
            answer: '게자리',
            score: 6
        },
        {
            answer: '쌍둥이자리',
            score: 5
        },
        {
            answer: '황소자리',
            score: 5
        },
        {
            answer: '양자리',
            score: 9
        }
    ]
},
{
    q: '맨투맨을 사러 간 당신, 당신이 고른 디자인은?',
    a: [{
            answer: '무지 맨투맨',
            score: 8
        },
        {
            answer: '왼쪽 가슴에 작은 자수가 새겨진 맨투맨',
            score: 6
        },
        {
            answer: '정면에 큰 곰돌이가 프린트된 맨투맨',
            score: 9
        },
        {
            answer: '왼쪽 가슴에 글귀와 작은 자수가 새겨진 맨투맨',
            score: 5
        },
        {
            answer: '정면에 큰 곰돌이와 글귀가 프린트된 맨투맨',
            score: 7
        }
    ]
},
{
    q: '당신이 사려는 옷의 가격이 천차만별! 당신의 선택은?',
    a: [{
            answer: '3-4만원 대, 평생 입을 것도 아닌데 이정도면 OK!',
            score: 7
        },
        {
            answer: '5-6만원 대, 이정도는 내야 품질이 괜찮지 않을까?',
            score: 8
        },
        {
            answer: '10만원 이상, 옷이 튼튼해야 오래입지! 이왕사는 거 좋은 거 사자!',
            score: 9
        }
    ]
},
{
    q: '새로운 물건을 사면 당신은,',
    a: [{
            answer: '이름표를 꼭 붙여야지!',
            score: 9
        },
        {
            answer: '이름표를 굳이 붙여야해?',
            score: 7
        }
    ]
},
{
    q: '사장이 된 당신, 도장을 만들어야 한다! 원하는 재료는?',
    a: [{
            answer: '기본 옥돌, 기본이 최고',
            score: 7
        },
        {
            answer: '검정색이 마블링 된 옥돌',
            score: 8
        },
        {
            answer: '파란색이 마블링 된 옥돌',
            score: 5
        },
        {
            answer: '빨간색이 마블링 된 옥돌',
            score: 7
        },
        {
            answer: '나무 재질, 따듯한 느낌',
            score: 6
        },
        {
            answer: '자연석, 비싸더라도 자연석이 단단하지',
            score: 9
        }
    ]
},
{
    q: '동양풍 vs 서양풍',
    a: [{
            answer: '동양풍',
            score: 9
        },
        {
            answer: '서양풍',
            score: 7
        }
    ]
}
]
/*받아와서보여주기 */
const infoList = [{
    from: 0,
    to: 10,
    mLeft: '10%',
    name: '받아와서보여주기',
    desc: '성격은 ~~'
},
{
    from: 11,
    to: 20,
    mLeft: '25%',
    name: '받아와서보여주기',
    desc: '성격은 ~~'
},
{
    from: 21,
    to: 30,
    mLeft: '40%',
    name: '받아와서보여주기',
    desc: '성격은 ~~'
},
{
    from: 31,
    to: 40,
    mLeft: '55%',
    name: '받아와서보여주기',
    desc: '성격은~~'
},
{
    from: 41,
    to: 50,
    mLeft: '70%',
    name: '받아와서보여주기',
    desc: '성격은 ~~'
},
{
    from: 51,
    to: 60,
    mLeft: '85%',
    name: '받아와서보여주기',
    desc: '성격은 ~~'
}
]