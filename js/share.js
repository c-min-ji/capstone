const url = 'https://minsich.ml';
const title = '[이미지테스트] 당신의 스타일 테스트';
const hash = '%23styletest %23이미지테스트 %23스타일테스트 ';

const fb = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +
        url + '&t=' + title + '' + hash,
        'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
}