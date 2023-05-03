const chords = [
	[
		"Baby-one-more-time",
		"Capo 3",
		"<p>Am E C Dm E<br />Am E C Dm E<br />Am E C Dm E<br />F G F F G<br/></p>",
	],
	[
		"Back-Door",
		"",
		"<p>G Em <br />C G D D <br />G Em <br />C G D G <br />D C G<br />Em D<br /><p>",
	],
	["Bend", "", "<p>E B E A B<br />A Bm …<br />… C#m D B<br /></p>"],
	[
		"Bittersweet",
		"",
		"<p>E7 A7 D G<br />E7 A7 D G<br />B7 Em A D<br />B7 Em C B7<br /></p>",
	],
	[
		"Blackbird",
		"",
		"<p>D Dmaj7 <br />Am Em <br />Gm D x3<br />Em A D<br />Bb A<br />Bb Em A7 D<br /></p>",
	],
	[
		"Black-Sheep",
		"",
		"<p>C Am G<br />C Em Am G C<br />Am G F C<br />C Em Am G C<br /></p>",
	],
	[
		"Born-to-lose",
		"",
		"<p>G /F G7/ <br />C /C /<br />C /C C7/<br />F /F /<br />C /C /<br />C /C C7/<br />F /Dm /<br />G /G G7/<br />C /C /<br /></p>",
	],
	[
		"Chas-n-Dave",
		"",
		"<p>C B7 C A7<br />D7 G7 C G7<br />C C7 F x2<br />Bb F Bb D7<br />G D7 G G7<br /></p>",
	],
	["Cheznee", "", "<p>D G D G<br />A G<br />Bm A Bm A<br /></p>"],
	[
		"Chip-shop",
		"",
		"<p>G D D G<br />G C C G<br />D G<br />G C D G<br />C D<br />G C D Em C<br />G D G<br /></p>",
	],
	[
		"Constant-Sorrow",
		"Capo 5",
		"<p>C C F G C<br />C C F G C <br />F C F G <br />F C F G <br />F C F G<br /></p>",
	],
	[
		"Corrido",
		"",
		"<p>C G C C<br />G G C C<br />F C F F<br />F C F F<br />G F G G<br />G F G G<br />G F C C<br />G G C C<br /></p>",
	],
	[
		"Crow",
		"",
		"<p>G C D G<br />G Em C D<br />G Em C D D<br />G C D G<br />G C D G<br />C D G Em<br />C Am D D<br />Play b, d strings?<br />Play break on 5th fret<br /></p>",
	],
	["Devil-aint-lazy", "", "<p>C, F, G with a D<br /></p>"],
	[
		"Doobie-Bros",
		"",
		"<p>G C G Em<br />D C C G<br />Em C x 3<br />A C<br /></p>",
	],
	[
		"East-Fyfe",
		"Capo 4",
		"<p>C G / C G <br />C G / D G<br />D C G x2<br />Em D G x2<br />Am G Am D<br />C G…<br /></p>",
	],
	[
		"Friday-Im-in-Love",
		"",
		"<p>D G D A<br />Bm G D A<br />G A Bm G<br />D A<br />Bm G<br />D A<br />",
	],
	[
		"Galway-Girl",
		"",
		"<p>F C F C<br />Am G F C<br />C Am F C<br />C G F C<br />F C G<br />F C G C<br />G F C<br />or<br />G D G D<br />Bm A G D<br />D Bm G D<br />D A G D<br />G D A<br />G D A D <br />A G D<br /></p>",
	],
	[
		"Grace",
		"Capo 2",
		"<p>intro/outro<br />G C G Em <br />G C D<br />G C G<br />G C Em<br />G Em C<br />G C D G<br />G C G<br />G D G<br />G D G C G<br />G D G C G<br />GC D<br />G C D<br /></p>",
	],
	[
		"I-am-weary",
		"",
		"<p>D G D<br />D A<br />D G D<br />D A D<br />A D D A<br />G D A D+ <br /></p>",
	],
	[
		"Keith",
		"Capo 3",
		"G ... G ... <br />G ... G G7<br />C Am<br />D D<br />Am D G C<br />C D G G7<br />C D G C<br />C C D... G<br />G C Am D<br />G C D D<br /></p>",
	],
	[
		"King-Cotton",
		"",
		"<p>G G7<br />C G<br />C G7<br />X XD G<br />C G<br />G D<br />C G E<br />C D G<br /></p>",
	],
	[
		"Lady-Luck",
		"",
		"<p>A A7 D A<br />A A D A<br />D A D A<br /><br />E7 ... Bm D<br />E F#m A<br />E F#m A E<br /></p>",
	],
	[
		"Lovesick-Blues",
		"",
		"<p>C /G <br />G7 /C C7<br />F /C A7<br />D7 /G7 <br />C /G <br />G7 /E E7<br />F /C A7<br />D7 /G7 C<br />E7 Am/E7 Am<br />E7 Am/D7 <br />G7 /C <br />D7 /D7 G<br /></p>",
	],
	["MJB-Hotel", "", "<p>Dm Gm A<br />[C7 F A Bb A]<br /></p>"],
	[
		"Not-the-one-for-me",
		"",
		"<p>C G C G<br />F C<br />G F Em D C G/<br />C F G G<br /></p>",
	],
	[
		"Rambling-Man",
		"",
		"<p>... C D / ... C G<br />G F G<br />G C D D<br />C G Em C<br />G D G<br />G C G<br />G C D D<br />C G Em C<br />G D G<br />Finish: G F G *4<br /></p>",
	],
	[
		"Rain",
		"Capo 2",
		"<p>Am F Dm FG<br />C G C F Am F<br />C G C F Dm F<br />Dm G Am F<br />F C G C<br />Am F Dm F *4[G]<br />F C G C<br />F C Dm Dm C<br /></p>",
	],
	["REM", "", "<p>Chorus only<br />G A D Em<br />G A D D<br /></p>"],
	[
		"Rolling",
		"",
		"<p>E D E D E D E E<br />E D A E<br />E D B B<br />E D A E<br />A B E E<br />A B E E<br />A F#m B B<br />E D A E<br />A B E E<br /></p>",
	],
	[
		"Roses",
		"Capo 4",
		"<p>C F C F C G F<br />C F C F <br />Em Dm C G<br />[G] Am F C<br />C F G C<br />F Am G F<br />Em Dm C G<br /></p>",
	],
	[
		"Rotterdam",
		"",
		"<p>C F C F<br />G Am G Am E7<br />Am C Am C<br />Am C D7 G<br /></p>",
	],
	["Seagulls", "", "<p>G C D C G<br />G F C D<br />C D x4 hold D<br /></p>"],
	["Stay-all-night", "", "<p>G, C, D<br /></p>"],
	[
		"Time-changes",
		"",
		"<p>G G D7 D7<br />D7 D7 G G <br />G G7 C Cm<br />G Em Am D7 G<br /></p>",
	],
	[
		"Train-Leaves",
		"",
		"<p>E D B E<br />E D B E<br />C#m F#<br />C#m F#<br />E D B E<br /></p>",
	],
	["Weight", "", "<p>G Bm C G *4<br />G C D *3 hold D<br /></p>"],
	[
		"Wichita",
		"",
		"<p>Bb C<br />Bb F Gm<br />F C G D<br />C G Gm7<br />D C Bb<br />Bb C<br /></p>",
	],
	[
		"Angel-Monty",
		"",
		"<p>GC GC <br />GC DG <br />G F C G x3 <br />G C D G <br /></p>",
	],
];
