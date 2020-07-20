var sample = {};

// 代入した数の2乗を返す
sample.square = function ( x ) {
    return Math.pow( x, 2 );
};

// 代入した文言に文字列を整形して返す
sample.formatText = function ( str ) {
    return  "You said, " + str;
};

module.exports = sample;