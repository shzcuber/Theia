import React from 'react';

const imagePaths = [
    "100_d771c25de292aae6fff4720a1dceadfd--mens-hairstyles-hipster-hair.jpg",
    "10_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-5-600x673.jpg",
    "11_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-1-600x791.jpg",
    "12_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-7-600x536.jpg",
    "13_enhanced-buzz-1092-1369146557-16.jpg",
    "14_4ba438480fc54368316afbc26748e5e7--cute-kittens-silly-cats.jpg",
    "15_4ScIVKE.jpg",
    "16_enhanced-buzz-27144-1369146360-10.jpg",
    "17_dc777e86c4dc80f8647ff45f9cced0dc.jpg",
    "18_bzbq0aejhgk11.jpg",
    "19_cat-beard-pictures-5-t.jpg",
    "1_3omzzNc.jpg",
    "20_tumblr_mmvc7fuWCU1ru9x5wo3_1280.jpg",
    "21_6fg5aphxhg961.jpg",
    "22_",
    "23_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men.jpg",
    "24_black_beard_cat_bearding.jpg",
    "25_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-6-600x803.jpg",
    "26_375e6172425ce0072be077035c356b57.jpg",
    "27_e5bdf94eb8743e633a665b433791367b.jpg",
    "28_3f8d6b9ddc46aad24c08093049c360e3.jpg",
    "29_722dbeedfd2895928c0fa5915fe16a6e.png",
    "2_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-3-600x626.jpg",
    "30_cat-beard-pictures-2-t.jpg",
    "31_20130523-cat-beards-1.jpg",
    "32_3bf9f9b15d7de5a717f9870f1e4a1df2.jpg",
    "33_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-2-600x430.jpg",
    "34_Top-10-Funny-Cats-with-Moustaches-7.jpg",
    "35_Cat-Beards-7.jpg",
    "36_a328c5ddfab068f5053b493e4dc04842--mustache-cat-my-friend.jpg",
    "37_1qck5nb4f1l41.jpg",
    "38_gJxg1Dgb6b_gdSfMmKy1XN0HoWcRMvE5jQqn4WneLvM.jpg",
    "39_20-cutest-dogs-and-cats-with-eyebrows-beards-or-mustaches-18.jpg",
    "3_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-8-600x755.jpg",
    "40_cat_beard6.jpg",
    "41_tumblr_mvlbf6EdPl1rq4uvro1_r1_500.jpg",
    "42_enhanced-buzz-30299-1369149375-6.jpg",
    "43_catbeard.jpg",
    "44_catbeardsfeatimg.jpg",
    "45_f9358fe05f66bb58e37a4e9b3617bc7e.jpg",
    "46_20130523-cat-beards-5.jpg",
    "47_enhanced-buzz-6705-1369148776-12.jpg",
    "48_most_epic_cat_beards_of_all_time_08.jpg",
    "49_a351ef87402f0cfed3e1d2ff332b635b--beards-cat.jpg",
    "4_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-4.jpg",
    "50_most_epic_cat_beards_of_all_time_25.jpg",
    "51_dc221b760dc0b6b770c9431d21520ad0--beards-cat.jpg",
    "52_cats-animals-men-beard-2560x1600-wallpaper.jpg",
    "53_most_epic_cat_beards_of_all_time_21.jpg",
    "54_b67ae5f48a090069c4e679efd7ef1874.jpg",
    "55_catbeard1.jpg",
    "56_enhanced-buzz-5429-1369146431-15.jpg",
    "57_8a8532f7a78bbbb0eb39fe9aad363655.jpg",
    "58_20-cutest-dogs-and-cats-with-eyebrows-beards-or-mustaches-19.jpg",
    "59_l-768x735.jpg",
    "5_f4p8kdsdl8c11.jpg",
    "60_article-2337326-1A30EC70000005DC-51_634x603.jpg",
    "62_34948055f100f26f57dc7e815ee4c564--so-funny-funny-stuff.jpg",
    "63_21a247dafa95459f80771ce7158fede5--so-funny-funny-stuff.jpg",
    "64_cat-beard-big.jpg",
    "65_bzbq0aejhgk11.jpg",
    "66_cf593d51ef0b155118f2f97e73a9e628.jpg",
    "67_83312503.jpg",
    "69_tumblr_mnmtttzc7Q1rwxmb1o1_500.jpg",
    "6_Ten-Cats-With-Beards-Who-Are-More-Than-a-Man-Than-Most-Men-9-600x709.jpg",
    "70_maxresdefault.jpg",
    "71_rMMNzrfZ3K-Sh2E6dqkSlmTYBGqtO9pZyo_2VgTMz-8.jpg",
    "72_72658bT.jpg",
    "73_38f91d00bf3f11e2b9c422000a1f968f_7.jpg",
    "74_d771c25de292aae6fff4720a1dceadfd.jpg",
    "75_21a600276c13c98ed35b8c4730edd024.png",
    "76_1b3e78300789a1c8495a202965b51334.jpg",
    "77_20130523-cat-beards-7.jpg",
    "78_20-cutest-dogs-and-cats-with-eyebrows-beards-or-mustaches-13.jpg",
    "79_SFntwXL7PXC8aWFiDeHOeOEPmGYkcz5KsXzMod62PKA.jpg",
    "7_3_CATERS_BEARDED_CAT_10-800x498.jpg",
    "80_3bf9f9b15d7de5a717f9870f1e4a1df2.jpg",
    "81_4_CATERS_BEARDED_CAT_12-800x498.jpg",
    "82_ae2.png",
    "83_enhanced-buzz-6157-1369148621-11.jpg",
    "84_ae2.png",
    "85_tumblr_lp1wexiViE1qejbiro1_1280-1.jpg",
    "86_cats-animals-men-beard-1920x1200-wallpaper.jpg",
    "87_8k6hnbf31zo01.jpg",
    "88_catbeard9.jpg",
    "89_cat-beard-memes-2.jpg",
    "8_ARUf1dFg_HYAiqwfMO2s0E9v7aSpkxiMJpI3ZPLFhRE.jpg",
    "90_43fe8331fd301ad23fec9b052686d2ee.jpg",
    "91_portrait-striped-fat-cat-white-beard-172022299.jpg",
    "92_pk948yz1vwcy.jpg",
    "93_pp.jpg",
    "94_20-cutest-dogs-and-cats-with-eyebrows-beards-or-mustaches-11.jpg",
    "95_hqdefault.jpg",
    "96_5a7f1aecc96f1f943c2712ee97b3c931.jpg",
    "97_a9749d951495790834073eadcba0eab2--funny-animals-funny-cats.jpg",
    "98_80935033.jpg",
    "99_oh0e58cdap461.png",
    "9_c6bf0b16bd746fa2bd7f8bcfeae8e23e--mustache-cat-hipster-cat.jpg"
]

function ImageCollection(props) {
    return (
        <div>
            {props.imagePaths.map(path => {
                <div>
                    <img src={'../../public/sample_images' + path} />
                </div>
            })}
        </div>
    );
};

export default function FilteredDownload() {
    return(
        <div>
            <title>Choose the pictures you like</title>
            <ImageCollection imagePaths={imagePaths} />
        </div>
    )
}