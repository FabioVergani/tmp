/*
https://developer.mozilla.org/en-US/docs/Web/CSS
presentationalequivalence:
cellspacing :border-spacing

//
#css1-properties:
background(-attachment,-color,-image,-position,-repeat)
border,(-color,-style,-width)
border(-bottom-left-right-top)-width,
clear,color,display,float,height,
font,font-family,font-size,font-style,font-variant,font-weight,
letter-spacing,line-height,
list-style(-image -position -type)
margin(-bottom,  -left, -right, -top)
padding,(-bottom,  -left, -right, -top)
text-align,text-decoration,text-indent,text-transform,
vertical-align,white-space,width,word-spacing,

#css2-properties:
'azimuth',
'border(-collapse|-spacing)
'caption-side','cursor','direction','elevation','empty-cells',
'font-size-adjust','font-stretch',
'orphans','page','page-break-inside','pitch','pitch-range','quotes','richness',
'speak','speak-header','speak-numeral','speak-punctuation','speech-rate','stress',
page-break-after-break-before
pitch(-range)
unicode-bidi

#css3-properties:
alignment-(adjust|baseline)
anchor-point
animation(-)(name|duration|timing-function|delay|iteration-count|direction|play-state)
appearance
backface-visibility
background-(clip|origin|size)
baseline-shift
binding
bleed
bookmark(-)(label|level|state|target)
border-radius
border((-top-bottom)(-left-right))-radius
border-image(-source|-slice|-width|-outset|-repeat)
bottom
box(-align|-decoration-break|-direction|-flex|-flex-group|-lines|-ordinal-group|-orient|-pack|-shadow|x-sizing)
break(-after|-before|-inside)
caption-side
clip
color-profile
column(-count|-fill|-gap|-rule|-rule-color|-rule-style|-rule-width|-span|-width)
columns
content
counter(-increment-reset)
crop
cue
cue(-after-before)
cursor
direction
display
dominant-baseline
drop-initial-after|before)-(adjust|align)|-size|-value
fit(-position)
font-(feature-settings,-kerning,-language-override,-synthesis,-variant-alternates|caps|east-asian|ligatures|numeric|position)
hanging-punctuation
hyphens
icon
image(-orientation,-resolution)
inline-box-align
line-break
line-stacking|-ruby|-shift|-strategy
marker-offset
marks
marquee(-direction,-play-count,-speed,-style)
move-to
nav-(down|-index|-left|-right|-up)
opacity
orphans
outline(-color|-offset|-style|-width)
overflow(-x,-y,,-style,-wrap)
page-policy
perspective(-origin)
play-during
position
presentation-level
punctuation-trim
quotes
rendering-intent
resize
rest
rest-after
rest-before
richness
right
rotation
rotation-point
ruby-align
ruby-overhang
ruby-position
ruby-span
size
speak
speak-header
speak-numeral
speak-punctuation
speech-rate
stress
string-set
tab-size
table-layout
target
target-name
target-new
target-position
text-align
text-align-last
text-decoration(-color|-line|-skip|-style)
text-emphasis(-color|-position|-style)
text(-height,t-justify,-outline,-overflow,-shadow,-space-collapse)
text-underline-position
text-wrap
transform(-origin,-style)
transition(-delay,-duration,-property,-timing-function)
word(-break-spacing-wrap)




==================================================================================================

Aural#inh[azimuth|volume|voice-family|stress|richness|pitch(-range)|speak(-(header|numeral|punctuation|rate))|pitch|elevation]
Aural#own[play-during|pause(-(before|after))|cue:(-(before|after))]

Box#own[border-(top|right|bottom|left)-(color|style|width)|clear|float|((padding|margin)-(top|right|bottom|left))]

ColorAndBackground#inh[color]
ColorAndBackground#own[((background)(-)(attachment|color|image|position|repeat))|]

Classification#inh[white-space|list-style(-)*(image|position|type)];
Classification#own[display];

Font#inh[font(-)*(family|size|style|variant|weight),letter-spacing,line-height]

Generate#own[content,counter(-)*(increment|reset)]

Page#inh[page(-)*(break)(-inside), widows,orphans]
Page#own[page(-)*(break)(-after-before)]

Tables#inh[border-(collapse|spacing),table-layout|caption-side|empty-cells]

Text#inh[word-spacing,text-transform|-indent|-align]
Text#own[text-decoration]

Visual#inh[z-index,visibility,vertical-align,unicode-bidi,]
Visual#own[ top,right,position,quotes,overflow,outline(-)*(color|style|width),(max|min)(-)(height|width),height,width,left,bottom,cursor,direction,clip,]



*/
CSS={
 SELECTORS:{
	v1note:000,//Class,ID,Contextual
	v2note:000,//Child,Descendant,Sibling,Attribute,Universal
	v3:000//,...
 },




 PSEUDO:{
	v1:'(:)((link|visited|active|)|(first-(line|letter|)))',
	v2:'(:)((|hover|focus|lang|before|after)|(first-(child)))',
	v3:'(target|first-of-type|nth-((last-)(child|of-type))(of-type)|last-(child|of-type)|only-(child|of-type)|lang|root|empty|enabled|disabled|checked|not)'
 },



 VALUES:{
	Units:'(pt|in|pc|mm|cm|px|em|ex)',//1+
	GenericFamily:'(serif|sans\-serif|cursive|fantasy|monospace)',//1+
	Size:{
	 absolute:'(xx\-small|x\-small|small|medium|large|x\-large|xx\-large)',//1+
	 relative:'(larger|smaller)'//1+
	}//,...
	BorderStyles:'CSS1#(none|dotted|dashed|solid|double|groove|ridge|inset|outset)|CSS2#(hidden)',
 },





 ATRULES:{
	v1:'(@)(import)',
	v2:'(@)(media|page)',
	v3:'(@)(font-face|keyframes|charset|namespace)'//,...
 },





 MEDIATYPES:{
	v2:'(aural|braille|embossed|handheld|print|projection|screen|speech|tty|tv)',
	v3:'(reader)'//,...
 },

 PROPERTIES:{
	BAD:'(text-replace)',
	GROUPS:{
//‹#0›
	 Aural:{//!Css1
		inh:{
		 azimuth:'(center)|<angle>|(((left|right)(wards|\-side)|(far|center)(\-left|\-right)|left|right)||behind)',
		 volume:'(medium)|(<percentage>|<number>|silent|soft|loud||x(\-soft|\-loud))',
		 voice-family:'(<specific-voice>(<generic-voice>)*)',
		 stress:'50|<number>',
		 richness:'50|<number>',
		 pitch-range:'50|<number>',
		 speech-rate:'medium|(<number>|x(\-slow|\-fast)|slow|fast|x|faster|slower)',
		 speak-punctuation:'none|code',
		 speak-numeral:'continuous|digits',
		 speak-header:'once|always',
		 speak:'normal|none|spell\-out',
		 pitch:'medium|(<frequency>)|(x\-low|low|high|x\-high)',
		 elevation:'level|<angle>|below|above|higher|lower'
		},
		own:{
		 play-during:'auto|<uri-audio>||(mix|repeat)||(none|inherit)',
		 pause-before:'<time>|<percentage>'
		 pause-after:'<time>|<percentage>'
		 pause:'<pause-before>&&<pause-after>'
		 cue-before:'none|<uri-audio>'
		 cue-after:'none|<uri-audio>'
		 cue:'<cue-before>&&<cue-after>'
		},
	 },
//‹#1›
	 Box:{
		own:{
		 width:'(auto)|(<percentage>|<length>)',
/*1+*/border:'(none|((thin|medium|thick|<length>)&(none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden2)&(color)))',
		 border-color:'(<-top-color>&<-right-color>&<-bottom-color>&<-left-color>)',
		 border-style:'(<-top-style>&<-right-style>&<-bottom-style>&<-left-style>)',
		 border-width:'(<-top-width>&<-right-width>&<-bottom-width>&<-left-width>)',
		 border-(top|right|bottom|left):'(none|(-width)&(-style)&(-color))',
		 border-(top|right|bottom|left)-color:'(transparent|<color>)',
		 border-(top|right|bottom|left)-style:BorderStyles
		 border-(top|right|bottom|left)-width:'((medium)|(thin|thick|<length>))',
		 clear:'((none)|(left|right|both))',//1+
		 float:'((none)|(left|right))',//1+
		 margin:'(<-top>&<-right>&<-bottom>&<-left>)',
		 margin-(top|right|bottom|left):'(0|<percentage>|<length>|auto)',
		 padding:'(<-top>&<-right>&<-bottom>&<-left>)',
		 padding-(top|right|bottom|left):'(0|<percentage>|<length>|auto)',
		},
	 },
//‹#2›
	 ColorAndBackground:{
		inh:{
		 color:'(<color>)',//1+
		},
		own:{
		 background:'(<-color>&<-image>&<-repeat>&<-attachment>&<-position>)',//1+
		 background-attachment:'((scroll)|fixed)',//1+
		 background-color:'((transparent)|<color>)',//1+
		 background-image:'(none|<url>)',//1+
		 background-position:'(((0 0)|<percentage>|<length>)||(top|center|bottom)||(left|center|right))',//1+
		 background-repeat:'((repeat)|(repeat(\-x|\-y)|no\-repeat))',//1+
		},
	 },
//‹#3›
	 Classification:{
		inh:{
		 //1+ normal|pre|nowrap
		 white-space:'(normal)|(nowrap|pre|pre(\-line|\-wrap))',
		 list-style:'<-type><-position><-image>',//1+
		 list-style-image:'(none)|<url>',
		 list-style-position:'(outside)|inside>',
		 //1+disc|circle|square|decimal|lower\-roman|upper\-roman|lower\-alpha|upper\-alpha|none
		 list-style-type:'(disc|circle|square|decimal(\-leading\-zero)|lower(\-roman\-greek\-alpha\-latin)|upper(\-roman\-alpha\-latin)|hebrew|armenian|georgian|cjk\-ideographic|hiragana\-iroha|katakana\-iroha|none)',
		},
		own:{////1+block|inline|list\-item|none
		 display:'(inline(\-block|\-table)*|block|list(\-item)|run(\-in)|table(\-row\-group)(\-header\-group)(\-footer\-group)|(-column\-group)|(\-cell|\-caption|)|none)',
		},
	 },
//‹#4›
	 Font:{
		inh:{//1+
		 font:'<system-font><font-style><font-variant><font-weight><font-size><line-height><font-family>',
		 font-family:'((<generic-family>|<family-name>),)*(<generic-family>|<family-name>|<google-font-family>)',
		 font-size:'<relative-size>|<absolute-size>|<percentage>|<length>',
		 font-style:'(normal)|italic|oblique',
		 font-variant:'(normal)|small\-caps',
		 font-weight:'(normal)|bolder|bold|lighter|100|200|300|400|500|600|700|800|900',
		 letter-spacing:'(normal)|<length>',
		 line-height:'(normal)|<percentage>|<length>|<number>'
		},
		own:{},
	 },
//‹#5›
	 Generate:{//!Css1
		inh:{},
		own:{
		 content:'((normal)|<attr>||<string>||<counter>||(open\-quote|close\-quote|no\-open-quote|no\-close-quote))',
		 counter-increment:'((none)|<counter-name>&<counter-name>)',
		 counter-reset:'(none|(<counter>||<counter-name>))',
		 x:'()',
		 x:'()',
		},
	 },







//‹#6›
	 Page:{//!Css1
		inh:{
		 widows:'(2|<integer>)'
		 page-break-inside:'(auto)|avoid'
		 page:'((auto)|<identifier>)'
		 orphans:'((2)|<integer>)'
		},
		own:{
		 page-break-after:'((auto)|(always|avoid|left|right))'
		 page-break-before:'((auto)|(always|avoid|left|right))'
		 x:'()'
		 x:'()'
		},
	 },





//‹#7›
	 Tables:{//!Css1
		inh:{
		 border-collapse:'(separate)(collapse)',
		 border-spacing:'(0)(length-horizontal||length- vertical)',
		 table-layout:'(auto)|fixed)',
		 caption-side:'(top)|bottom)',
		 empty-cells:'(show)|hide)',
		},
		own:{},
	 },




//‹#8›
	 Text:{
		inh:{
		 word-spacing:'((normal)|<length>)',//1+
		 text-transform:'none|(capitalize|uppercase|lowercase|)',//1+
		 text-indent:'0|<percentage>|<length>',
		 text-align:'(left|center|right|justify)',
		},
		own:{
		 text-decoration:'none|(underline||overline||line\-through||blink)',//1+
		},
	 },
//‹#9›
	 Visual:{//!Css1
		inh:{},
		own:{
		 z-index:'(0|(auto|<integer>))',
		 visibility:'(visible)|(hidden|collapse)',
		 vertical-align:'(baseline)|(sub|super|top|text(\-top|\-bottom)|middle|bottom|<percentage>|<length>)',
		 unicode-bidi:'(normal)|(embed|bidi\-override)',
		 top:'(auto|<percentage>|<length>)',
		 right:'auto|<percentage>|<length>',
		 position:'static|(relative|absolute|fixed)',
		 quotes:'none|<string>',
		 overflow:'(visible)|(hidden|scroll|auto)',
		 outline-width:'(medium|(thin|thick|<length>))',
		 outline:'(<outline-color>&&<outline-style>&&<outline-width>)',
		 outline-color:'((invert)|<color>)',
		 outline-style:'((none)|(dotted|dashed|solid|double|groove|ridge|inset|outset|hidden))',
		 max-height:'((none)<percentage>|<length>)',
		 max-width:'((none)<percentage>|<length>)',
		 min-height:'(0|(<percentage>|<length>))',
		 min-width:'(0|(<percentage>|<length>))',
		 height:'((auto)|(<percentage>|<length>))',
		 left:'((auto)|(<percentage>|<length>))',
		 bottom:'((auto)|(<percentage>|<length>))',
		 cursor:'((auto)|(<uri>||<cursor-type>|progress))',
		 direction:'((ltr)|rtl)',
		 clip:'((auto)|<shape>)',
		 bottom:'((auto)|<percentage>|<length>)',
		},
	 }//,...
	},
//‹#10›
	 AnimationAndTransition:{//3+
		inh:{},
		own:{},
	 },
//‹#11›
	 Behavioural:{//3+
		inh:{},
		own:{},
	 },
//‹#12›
	 Columns:{//3+
		inh:{},
		own:{},
	 },
//‹#13›
	 Commands:{//3+
		inh:{},
		own:{},
	 },
//‹#14›
	 Hyperlinks:{//3+
		inh:{},
		own:{},
	 },
//‹#15›
	 LineBox:{//3+
		inh:{},
		own:{},
	 },
//‹#16›
	 Ruby:{//3+
		inh:{},
		own:{},
	 },
//‹#17›
	 UserInterface:{//3+
		inh:{},
		own:{},
	 },
//‹#18›
	 Extensions:{//3+
		inh:{},
		own:{},
	 },







	/*
	 groupname:{
		inh:{},
		own:{},
	 },
	*/
 },

 //,...
};
//


/*
*/

size:{
	v2:[],
	v3:[]//,...
 },
v2:[],
v3:[],
v2:{},
v3:{},
//


//3
'text-align-last','text-emphasis','text-height','text-justify','text-outline','text-shadow','text-wrap',
'voice-balance','voice-rate','voice-pitch','voice-pitch-range','voice-stress','voice-volume',
'white-space-collapse','word-break','word-wrap'
'fit','fit-position','hanging-punctuation',
'hyphenate-after','hyphenate-before','hyphenate-character','hyphenate-lines','hyphenate-resource','hyphens',
'image-resolution',
'line-stacking','line-stacking-ruby','line-stacking-shift','line-stacking-strategy','marquee-direction','overflow-style',
'presentation-level','punctuation-trim','ruby-align','ruby-overhang','ruby-position',








//
//var ValidMediatypes=( ).concat( );
//prepend=function(x){m=[x].concat(m)}
//


[animatable-properties]
background-color
background-position
background-size
border-bottom-color
border-bottom-left-radius
border-bottom-right-radius
border-bottom-width
border-left-color
border-left-width
border-radius
border-right-color
border-right-width
border-spacing
border-top-color
border-top-left-radius
border-top-right-radius
border-top-width
bottom
box-shadow
clip
color
column-count
column-gap
column-rule-color
column-rule-width
column-width
crop
font-size
font-size-adjust
font-stretch
font-weight
height
left
letter-spacing
line-height
margin-bottom
margin-left
margin-right
margin-top
marker-offset
max-height
max-width
min-height
min-width
opacity
outline-color
outline-offset
outline-width
padding-bottom
padding-left
padding-right
padding-top
right
text-decoration-color
text-indent
text-shadow
top
transform
transform-origin
vertical-align
visibility
width
word-spacing
z-index









..

-PREFIX-animation
-PREFIX-animation-delay
-PREFIX-animation-direction
-PREFIX-animation-duration
-PREFIX-animation-fill-mode
-PREFIX-animation-iteration-count
-PREFIX-animation-name
-PREFIX-animation-play-state
-PREFIX-animation-timing-function
-PREFIX-appearance
-PREFIX-background-clip
-PREFIX-background-composite
-PREFIX-background-origin
-PREFIX-background-size
-PREFIX-border-bottom-left-radius
-PREFIX-border-bottom-right-radius
-PREFIX-border-horizontal-spacing
-PREFIX-border-image
-PREFIX-border-radius
-PREFIX-border-top-left-radius
-PREFIX-border-top-right-radius
-PREFIX-border-vertical-spacing
-PREFIX-box-align
-PREFIX-box-direction
-PREFIX-box-flex
-PREFIX-box-flex-group
-PREFIX-box-lines
-PREFIX-box-ordinal-group
-PREFIX-box-orient
-PREFIX-box-pack
-PREFIX-box-shadow
-PREFIX-box-sizing
-PREFIX-column-break-after
-PREFIX-column-break-before
-PREFIX-column-break-inside
-PREFIX-column-count
-PREFIX-column-gap
-PREFIX-column-rule
-PREFIX-column-rule-color
-PREFIX-column-rule-style
-PREFIX-column-rule-width
-PREFIX-columns
-PREFIX-column-width
-PREFIX-line-break
-PREFIX-margin-bottom-collapse
-PREFIX-margin-collapse
-PREFIX-margin-start
-PREFIX-margin-top-collapse
-PREFIX-marquee
-PREFIX-marquee-direction
-PREFIX-marquee-increment
-PREFIX-marquee-repetition
-PREFIX-marquee-speed
-PREFIX-marquee-style
-PREFIX-mask
-PREFIX-mask-attachment
-PREFIX-mask-box-image
-PREFIX-mask-clip
-PREFIX-mask-composite
-PREFIX-mask-image
-PREFIX-mask-origin
-PREFIX-mask-position
-PREFIX-mask-position-x
-PREFIX-mask-position-y
-PREFIX-mask-repeat
-PREFIX-mask-size
-PREFIX-nbsp-mode
-PREFIX-padding-start
-PREFIX-rtl-ordering
-PREFIX-text-fill-color
-PREFIX-text-security
-PREFIX-text-stroke
-PREFIX-text-stroke-color
-PREFIX-text-stroke-width
-PREFIX-transform
-PREFIX-transform-origin
-PREFIX-transform-origin-x
-PREFIX-transform-origin-y
-PREFIX-transition
-PREFIX-transition-delay
-PREFIX-transition-duration
-PREFIX-transition-property
-PREFIX-transition-timing-function
-PREFIX-user-drag
-PREFIX-user-modify
-PREFIX-user-select

'*************
'
'	CSS 1
'
'*************

[background]
initial=
group=Color and Background
value1=<background-color>+<background-image>+<background-repeat>+<background-attachment>+<background-position>

[background-attachment]
initial=scroll
group=Color and Background
value1=scroll|fixed

[background-color]
initial=transparent
group=Color and Background
value1=transparent|<color>

[background-image]
initial=none
group=Color and Background
value1=<url>|none|linear\-gradient\([^\)]+\)|radial\-gradient\([^\)]+\)

[background-position]
initial=0% 0%
group=Color and Background
multiple=1
value1=(<percentage>|<length>)||(top|center|bottom)||(left|center|right)

[background-repeat]
initial=repeat
group=Color and Background
value1=repeat\-x|repeat\-y|no\-repeat|repeat

[border]
initial=
group=Box
value1=thin|medium|thick|<length>+none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden+<color>

[border-bottom]
group=Box
value1=<border-bottom-width>+<border-bottom-style>+<border-bottom-color>

[border-bottom-color]
group=Box
value1=transparent|<color>

[border-bottom-style]
group=box
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[border-bottom-width]
initial=medium
group=Box
value1=thin|medium|thick|<length>

[border-color]
group=Box
value1=<border-top-color>+<border-right-color>+<border-bottom-color>+<border-left-color>

[border-left]
group=Box
value1=<border-left-width>+<border-left-style>+<border-left-color>

[border-left-color]
group=Box
value1=transparent|<color>

[border-left-style]
group=box
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[border-left-width]
initial=medium
group=Box
value1=thin|medium|thick|<length>

[border-right]
group=Box
value1=<border-right-width>+<border-right-style>+<border-right-color>

[border-right-color]
group=Box
value1=transparent|<color>

[border-right-style]
group=box
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[border-right-width]
initial=medium
group=Box
value1=thin|medium|thick|<length>

[border-style]
initial=none
group=Box
value1=<border-top-style>+<border-right-style>+<border-bottom-style>+<border-left-style>

[border-top]
initial=
group=Box
value1=<border-top-width>+<border-top-style>+<border-top-color>

[border-top-color]
group=Box
value1=transparent|<color>

[border-top-style]
group=box
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[border-top-width]
initial=medium
group=Box
value1=thin|medium|thick|<length>

[border-width]
initial=
group=Box
value1=<border-top-width>+<border-right-width>+<border-bottom-width>+<border-left-width>

[clear]
initial=none
group=Box
value1=none|left|right|both

[color]
group=Color and Background
value1=<color>

[display]
initial=block
group=Classification
value1=inline\-block|inline|block|list\-item|run\-in|inline\-table|table\-row\-group|table\-header\-group|table\-footer\-group|table\-row|table\-column\-group|table\-column|table\-cell|table\-caption|table|box|none

[float]
initial=none
group=Box
value1=left|right|none

[height]
initial=auto
group=Visual
value1=<percentage>|<length>|auto

[font]
group=Font
value1=<system-font>+<font-style>+<font-variant>+<font-weight>+<font-size>+<line-height>+<font-family>

[font-family]
initial=
group=Font
value1=((<generic-family>|<family-name>|<google-font-family>),)*(<generic-family>|<family-name>|<google-font-family>)

[font-size]
initial=medium
group=Font
value1=<relative-size>|<absolute-size>|<percentage>|<length>

[font-style]
initial=normal
group=Font
value1=normal|italic|oblique

[font-weight]
initial=normal
group=Font
value1=normal|bolder|bold|lighter|100|200|300|400|500|600|700|800|900

[letter-spacing]
initial=normal
group=Text
value1=normal|<length>

[line-height]
initial=normal
group=Text
value1=normal|<percentage>|<length>|<number>

[list-style]
initial=
group=Classification
value1=<list-style-type>+<list-style-position>+<list-style-image>

[list-style-image]
initial=none
group=Classification
value1=<url>|none

[list-style-position]
initial=outside
group=Classification
value1=inside|outside

[list-style-type]
initial=disc
group=Classification
value1=disc|circle|square|decimal\-leading\-zero|decimal|lower\-roman|upper\-roman|lower\-greek|lower\-alpha|lower\-latin|upper\-alpha|upper\-latin|hebrew|armenian|georgian|cjk\-ideographic|hiragana\-iroha|hiragana|katakana\-iroha|katakana|none

[margin]
initial=
group=Box
value1=<margin-top>+<margin-right>+<margin-bottom>+<margin-left>

[margin-bottom]
initial=0
group=Box
value1=<percentage>|<length>|auto

[margin-left]
initial=0
group=Box
value1=<percentage>|<length>|auto

[margin-right]
initial=0
group=Box
value1=<percentage>|<length>|auto

[margin-top]
initial=0
group=Box
value1=<percentage>|<length>|auto

[padding]
initial=
group=Box
value1=<padding-top>+<padding-right>+<padding-bottom>+<padding-left>

[padding-bottom]
initial=0
group=Box
value1=<percentage>|<length>

[padding-left]
initial=0
group=Box
value1=<percentage>|<length>

[padding-right]
initial=0
group=Box
value1=<percentage>|<length>

[padding-top]
initial=0
group=Box
value1=<percentage>|<length>

[text-align]
initial=
group=Text
value1=left|right|center|justify

[text-decoration]
initial=none
group=Text
multiple=1
value1=none|(underline||overline||line\-through||blink)

[text-indent]
initial=0
group=Text
value1=<percentage>|<length>

[text-transform]
initial=none
group=Text
value1=capitalize|uppercase|lowercase|none

[vertical-align]
initial=baseline
group=Visual
value1=baseline|sub|super|top|text\-top|middle|bottom|text\-bottom|<percentage>|<length>

[white-space]
initial=normal
group=Classification
value1=normal|nowrap|pre\-line|pre\-wrap|pre

[width]
initial=auto
group=Box
value1=<percentage>|<length>|auto

[word-spacing]
initial=normal
group=Text
value1=normal|<length>


'*************
'
'	CSS 2
'
'*************

[border-collapse]
group=Tables
initial=separate
value1=collapse|separate

[border-spacing]
group=Tables
initial=0
multiple=1
value1=<length>||<length>

[bottom]
group=Visual
initial=auto
value1=<percentage>|<length>|auto

[caption-side]
group=Tables
initial=top
value1=top|bottom

[clip]
initial=auto
group=Visual
value1=<shape>|auto

[content]
initial=normal
group=Generated Content
multiple=1
value1=<attr>||<string>||<counter>||(normal|open\-quote|close\-quote|no\-open\-quote|no\-close\-quote)

[counter-increment]
initial=none
group=Generated Content
multiple=1
value1=none|<counter-name>

[counter-reset]
initial=none
group=Generated Content
multiple=1
value1=none|(<counter>||<counter-name>)

[cursor]
group=Visual
initial=auto
multiple=1
value1=<uri>||<cursor-type>|progress

[direction]
group=Visual
initial=ltr
value1=ltr|rtl

[empty-cells]
group=Tables
initial=show
value1=show|hide

[left]
initial=auto
group=Visual
value1=<percentage>|<length>|auto

[marker-offset]
initial=auto
group=Generated Content
value1=<length>|auto

[marks]
initial=none
group=Page
multiple=1
value1=crop|cross|none

[max-height]
initial=none
group=Visual
value1=<percentage>|<length>|none

[max-width]
initial=none
group=Visual
value1=<percentage>|<length>|none

[min-height]
initial=0
group=Visual
value1=<percentage>|<length>

[min-width]
initial=0
group=Visual
value1=<percentage>|<length>

[orphans]
initial=2
group=Page
value1=<integer>

[outline]
initial=
group=Visual
value1=<outline-color>+<outline-style>+<outline-width>

[outline-color]
initial=invert
group=Visual
value1=invert|<color>

[outline-style]
initial=none
group=Visual
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[outline-width]
initial=medium
group=Visual
value1=thin|medium|thick|<length>

[overflow]
initial=visible
group=Visual
value1=visible|hidden|scroll|auto

[page-break-after]
initial=auto
group=Page
value1=auto|always|avoid|left|right

[page-break-before]
initial=auto
group=Page
value1=auto|always|avoid|left|right

[page-break-inside]
initial=auto
group=Page
value1=avoid|auto

[position]
initial=static
group=Visual
value1=static|relative|absolute|fixed

[quotes]
initial=
group=Visual
multiple=1
value1=none|<string>

[right]
initial=auto
group=Visual
value1=<percentage>|<length>|auto

[size]
initial=auto
group=Page
multiple=1
value1=<length>{1,2}|(auto|portrait|landscape)

[table-layout]
initial=auto
group=Tables
value1=auto|fixed

[top]
initial=auto
group=Visual
value1=<percentage>|<length>|auto

[unicode-bidi]
initial=normal
group=Visual
value1=normal|embed|bidi\-override

[visibility]
initial=visible
group=Visual
value1=visible|hidden|collapse

[widows]
initial=2
group=Page
value1=<integer>

[z-index]
initial=auto
group=Visual
value1=auto|<integer>


'*************
'
'	CSS 3
'
'*************

[alignment-adjust]
group=Line Box
initial=auto
value1=auto|baseline|before\-edge|text\-before\-edge|middle|central|after\-edge|text\-after\-edge|ideographic|alphabetic|hanging|mathematical|<percentage>|<length>
nosupport=IE|FF|CH|SA

[alignment-baseline]
group=Line Box
initial=baseline
value1=baseline|use\-script|before\-edge|text\-before\-edge|after\-edge|text\-after\-edge|central|middle|ideographic|alphabetic|hanging|mathematical
nosupport=IE|FF|CH|SA

[anchor-point]
group=Commands
initial=none
value1=none|left|center|right|top|bottom|<percentage>|<length>
nosupport=IE|FF|CH|SA

[animation]
initial=
group=Animation and Transition
value1=<animation-name>+<animation-duration>+<animation-timing-function>+<animation-delay>+<animation-iteration-count>+<animation-direction>

[animation-name]
group=Animation and Transition
initial=none
value1=<keyframename>|none
nosupport=IE

[animation-duration]
group=Animation and Transition
initial=0
value1=<time>
nosupport=IE

[animation-timing-function]
group=Animation and Transition
initial=ease
value1=linear|ease|ease\-in|ease\-out|ease\-in\-out|cubic\-bezier\([^\)]+\)
nosupport=IE

[animation-delay]
group=Animation and Transition
initial=0
value1=<time>
nosupport=IE

[animation-iteration-count]
group=Animation and Transition
initial=1
value1=<integer>|infinite
nosupport=IE

[animation-direction]
group=Animation and Transition
initial=normal
value1=normal|alternate
nosupport=IE

[animation-play-state]
group=Animation and Transition
initial=running
value1=paused|running
nosupport=IE

[appearance]
group=Visual
initial=normal
value1=normal|icon|window|button|menu|field
nosupport=IE

[backface-visibility]
group=Visual
initial=visible
value1=visible|hidden
nosupport=IE

[background-clip]
initial=border-box
group=Color and Background
value1=border\-box|padding\-box|content\-box

[background-origin]
initial=padding-box
group=Color and Background
value1=padding\-box|border\-box|content\-box

[background-size]
initial=auto
group=Color and Background
value1=((<length>|<percentage>),)*(<length>|<percentage>)|auto|cover|contain

[baseline-shift]
group=Line Box
initial=baseline
value1=baseline|sub|super|<percentage>|<length>
nosupport=IE|FF|CH|SA

[binding]
group=Behavioural
initial=none
value1=none|<uri>
nosupport=IE|FF|CH|SA

[bleed]
group=Generated Content
initial=6pt
value1=<length>
nosupport=IE|FF|CH|SA

[bookmark-label]
group=Generated Content
initial=content()
value1=content\([^\)]+\)|<string>
nosupport=IE|FF|CH|SA

[bookmark-level]
group=Generated Content
initial=none
value1=none|<integer>
nosupport=IE|FF|CH|SA

[bookmark-state]
group=Generated Content
initial=open
value1=open|closed
nosupport=IE|FF|CH|SA

[bookmark-target]
group=Generated Content
initial=none
value1=none|<uri>
nosupport=IE|FF|CH|SA

[border-image]
initial=
group=Box
value1=<border-image-source>+<border-image-slice>+<border-image-width>+<border-image-outset>+<border-image-repeat>

[border-image-source]
initial=none
group=Box
value1=<url>|none
nosupport=IE|FF|CH|SA

[border-image-slice]
initial=100%
group=Box
value1=((<number>|<percentage>),)*(<number>|<percentage>)|fill
nosupport=IE|FF|CH|SA

[border-image-width]
initial=1
group=Box
value1=((<number>|<percentage>),)*(<number>|<percentage>)|auto
nosupport=IE|FF|CH|SA

[border-image-outset]
initial=0
group=Box
value1=((<length>|<number>),)*(<length>|<number>)
nosupport=IE|FF|CH|SA

[border-image-repeat]
initial=stretch
group=Box
value1=stretch|repeat|round
nosupport=IE|FF|CH|SA

[border-radius]
initial=
group=Box
value1=<border-top-left-radius>+<border-top-right-radius>+<border-bottom-right-radius>+<border-bottom-left-radius>

[border-top-left-radius]
initial=0
group=Box
value1=(<length>|<percentage>)

[border-top-right-radius]
initial=0
group=Box
value1=(<length>|<percentage>)

[border-bottom-right-radius]
initial=0
group=Box
value1=(<length>|<percentage>)

[border-bottom-left-radius]
initial=0
group=Box
value1=(<length>|<percentage>)

[box-align]
initial=stretch
group=Box
value1=start|end|center|baseline|stretch
nosupport=IE

[box-decoration-break]
initial=slice
group=Color and Background
value1=slice|clone
nosupport=IE|FF|CH|SA

[box-direction]
initial=normal
group=Box
value1=normal|reverse
nosupport=IE

[box-flex]
initial=0.0
group=Box
value1=<number>
nosupport=IE

[box-flex-group]
initial=1
group=Box
value1=<integer>
nosupport=IE|FF|CH|SA

[box-lines]
initial=single
group=Box
value1=single|multiple
nosupport=IE|FF|CH|SA

[box-ordinal-group]
initial=1
group=Box
value1=<integer>
nosupport=IE

[box-orient]
initial=inline-axis
group=Box
value1=horizontal|vertical|inline\-axis|block\-axis
nosupport=IE

[box-pack]
initial=start
group=Box
value1=start|end|center|justify
nosupport=IE

[box-shadow]
initial=none
group=Box
multiple=1
value1=<length>|<length>||(<length>)||(<length>)||(<color>)||(inset)

[box-sizing]
initial=content-box
group=Visual
value1=content\-box|border\-box

[break-after]
initial=auto
group=Columns
value1=auto|always|avoid|left|right|page|column|avoid\-page|avoid\-column
nosupport=IE

[break-before]
initial=auto
group=Columns
value1=auto|always|avoid|left|right|page|column|avoid\-page|avoid\-column
nosupport=IE

[break-inside]
initial=auto
group=Columns
value1=auto|avoid|avoid\-page|avoid\-column
nosupport=IE

[color-profile]
initial=auto
group=Color and Background
value1=auto|sRGB|<uri>
nosupport=IE|FF|CH|SA

[columns]
initial=
group=Columns
value1=<column-width>+<column-count>

[column-count]
initial=auto
group=Columns
value1=<integer>|(auto)
nosupport=IE

[column-width]
initial=auto
group=Columns
value1=<length>|auto
nosupport=IE|FF

[column-fill]
initial=balance
group=Columns
value1=balance|auto
nosupport=IE|CH|SA

[column-gap]
initial=normal
group=Columns
value1=<length>|(normal)
nosupport=IE

[column-rule]
initial=
group=Columns
value1=<column-rule-width>+<column-rule-style>+<column-rule-color>

[column-rule-color]
initial=black
group=Columns
value1=<color>
nosupport=IE

[column-rule-style]
initial=none
group=Columns
value1=none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset
nosupport=IE

[column-rule-width]
initial=medium
group=Columns
value1=thin|medium|thick|<length>
nosupport=IE

[column-span]
initial=1
group=Columns
value1=1|all
nosupport=IE|FF

[crop]
initial=auto
group=Visual
value1=<shape>|<inset-rect>|auto
nosupport=IE|FF|CH|SA

[dominant-baseline]
initial=auto
group=Line Box
value1=auto|use\-script|no\-change|reset\-size|alphabetic|hanging|ideographic|mathematical|central|middle|text\-after\-edge|text\-before\-edge
nosupport=IE|FF|CH|SA

[drop-initial-after-adjust]
initial=text-after-edge
group=Line Box
value1=central|middle|after\-edge|text\-after\-edge|ideographic|alphabetic|mathematical|<percentage>|<length>
nosupport=IE|FF|CH|SA

[drop-initial-after-align]
initial=baseline
group=Line Box
value1=<alignment-baseline>
nosupport=IE|FF|CH|SA

[drop-initial-before-adjust]
initial=text-before-edge
group=Line Box
value1=before\-edge|text\-before\-edge|central|middle|hanging|mathematical|<percentage>|<length>
nosupport=IE|FF|CH|SA

[drop-initial-before-align]
initial=caps-height
group=Line Box
value1=caps\-height|<alignment-baseline>
nosupport=IE|FF|CH|SA

[drop-initial-size]
initial=auto
group=Line Box
value1=auto|<length>|<percentage>
nosupport=IE|FF|CH|SA

[drop-initial-value]
initial=initial
group=Line Box
value1=initial|<integer>
nosupport=IE|FF|CH|SA

[fit]
initial=fill
group=Page
value1=fill|hidden|meet|slice
nosupport=IE|FF|CH|SA

[fit-position]
initial=0% 0%
group=Page
value1=<percentage>|<length>|top|center|bottom|left|center|right|auto
nosupport=IE|FF|CH|SA

[font-feature-settings]
initial=normal
group=Font
value1=normal|<feature-tag-value>
nosupport=IE|FF|CH|SA

[font-kerning]
initial=auto
group=Font
value1=auto|normal|none
nosupport=IE|FF|CH|SA

[font-language-override]
initial=normal
group=Font
value1=normal|<string>
nosupport=IE|FF|CH|SA

[font-size-adjust]
initial=none
group=Font
value1=<number>|none
nosupport=IE|CH|SA

[font-stretch]
initial=none
group=Font
value1=wider|narrower|ultra\-condensed|extra\-condensed|condensed|semi\-condensed|normal|semi\-expanded|expanded|extra\-expanded|ultra\-expanded
nosupport=IE|CH|SA

[font-synthesis]
initial=weight style
group=Font
value1=none|weight|style
nosupport=IE|FF|CH|SA
multiple=1

[font-variant]
initial=normal
group=Font
value1=normal|<common-lig-values>|<discretionary-lig-values>|<historical-lig-values>|contextual|no\-contextual|stylistic\([^\)]+\)|historical\-forms|styleset\([^\)]+\)|character\-variant\([^\)]+\)|swash\([^\)]+\)|ornaments\([^\)]+\)|annotation\([^\)]+\)|ruby|<caps-value>|<numeric-figure-values>|<numeric-spacing-values>|<numeric-fraction-values>|slashed\-zero|<east-asian-variant-values>|<east-asian-width-values>
nosupport=IE|FF|CH|SA

[font-variant-alternates]
initial=normal
group=Font
value1=normal|contextual|no\-contextual|stylistic\([^\)]+\)|historical\-forms|styleset\([^\)]+\)|character\-variant\([^\)]+\)|swash\([^\)]+\)|ornaments\([^\)]+\)|annotation\([^\)]+\)|ruby
nosupport=IE|FF|CH|SA

[font-variant-caps]
initial=normal
group=Font
value1=normal|<caps-value>
nosupport=IE|FF|CH|SA

[font-variant-east-asian]
initial=normal
group=Font
value1=normal|<east-asian-variant-values>|<east-asian-width-values>
nosupport=IE|FF|CH|SA

[font-variant-ligatures]
initial=normal
group=Font
value1=normal|<common-lig-values>|<discretionary-lig-values>|<historical-lig-values>
nosupport=IE|FF|CH|SA

[font-variant-numeric]
initial=normal
group=Font
value1=normal|<numeric-figure-values>|<numeric-spacing-values>|<numeric-fraction-values>|slashed\-zero
nosupport=IE|FF|CH|SA

[font-variant-position]
initial=normal
group=Font
value1=normal|sub|super|ordinal
nosupport=IE|FF|CH|SA

[hanging-punctuation]
initial=none
group=Text
value1=none|first|last|allow\-end|force\-end
nosupport=IE|FF|CH|SA

[hyphens]
initial=manual
group=Text
value1=none|manual|auto
nosupport=IE|FF|CH|SA

[icon]
initial=auto
group=Visual
value1=auto|<url>
nosupport=IE|FF|CH|SA

[image-orientation]
initial=0deg
group=Visual
value1=<angle>
nosupport=IE|FF|CH|SA

[image-resolution]
initial=1dppx
group=Visual
value1=from\-image|<resolution>|snap
nosupport=IE|FF|CH|SA
multiple=1

[inline-box-align]
initial=last
group=Line Box
value1=initial|last|<integer>
nosupport=IE|FF|CH|SA

[line-break]
initial=auto
group=Text
value1=auto|loose|normal|strict
nosupport=IE|FF|CH|SA

[line-stacking]
initial=auto
group=Line Box
value1=<line-stacking-strategy>+<line-stacking-ruby>+<line-stacking-shift>

[line-stacking-ruby]
initial=exclude-ruby
group=Line Box
value1=exclude\-ruby|include\-ruby
nosupport=IE|FF|CH|SA

[line-stacking-shift]
initial=consider-shifts
group=Line Box
value1=consider\-shifts|disregard\-shifts
nosupport=IE|FF|CH|SA

[line-stacking-strategy]
initial=inline-line-height
group=Line Box
value1=inline\-line\-height|block\-line\-height|max\-height|grid\-height
nosupport=IE|FF|CH|SA

[marquee-direction]
initial=forward
group=Visual
value1=forward|reverse
nosupport=IE|FF|CH|SA

[marquee-play-count]
initial=1
group=Visual
value1=<integer>|infinite
nosupport=IE|FF|CH|SA

[marquee-speed]
initial=normal
group=Visual
value1=slow|normal|fast
nosupport=IE|FF|CH|SA

[marquee-style]
initial=scroll
group=Visual
value1=scroll|slide|alternate
nosupport=IE|FF|CH|SA

[move-to]
initial=normal
group=Generated Content
value1=normal|here|<identifier>
nosupport=IE|FF|CH|SA

[nav-index]
initial=auto
group=User Interface
value1=auto|<number>
nosupport=IE|FF|CH|SA

[nav-down]
initial=auto
group=User Interface
value1=auto|<target-name>
nosupport=IE|FF|CH|SA

[nav-left]
initial=auto
group=User Interface
value1=auto|<target-name>
nosupport=IE|FF|CH|SA

[nav-right]
initial=auto
group=User Interface
value1=auto|<target-name>
nosupport=IE|FF|CH|SA

[nav-up]
initial=auto
group=User Interface
value1=auto|<target-name>
nosupport=IE|FF|CH|SA

[opacity]
initial=1
group=Visual
value1=<number>

[outline-offset]
initial=0
group=Visual
value1=<length>

[overflow-x]
initial=visible
group=Visual
value1=visible|hidden|scroll|auto|no\-display|no\-content

[overflow-y]
initial=visible
group=Visual
value1=visible|hidden|scroll|auto|no\-display|no\-content

[overflow-style]
initial=auto
group=Visual
value1=auto|marquee\-line|marquee\-block
nosupport=IE|FF|CH|SA

[overflow-wrap]
initial=normal
group=Visual
value1=normal|break\-word
nosupport=IE|FF|CH|SA

[page]
initial=auto
group=Page
value1=<identifier>|auto
nosupport=IE|FF|CH|SA

[page-policy]
initial=start
group=Page
value1=start|first|last
nosupport=IE|FF|CH|SA

[perspective]
initial=none
group=Visual
value1=<length>|none
nosupport=IE|FF

[perspective-origin]
initial=50% 50%
group=Visual
multiple=1
value1=(<percentage>|<length>|left|center|right)||(<percentage>|<length>|top|center|bottom)
nosupport=IE|FF

[presentation-level]
initial=0
group=Visual
value1=<integer>|same|increment
nosupport=IE|FF|CH|SA

[punctuation-trim]
initial=none
group=Text
value1=none|start|end|allow\-end|adjacent
nosupport=IE|FF|CH|SA

[rendering-intent]
initial=auto
group=Color and Background
value1=auto|perceptual|relative\-colorimetric|saturation|absolute\-colorimetric
nosupport=IE|FF|CH|SA

[resize]
initial=none
group=Visual
value1=none|both|horizontal|vertical
nosupport=IE

[rotation]
initial=0
group=Visual
value1=<angle>
nosupport=IE|FF|CH|SA

[rotation-point]
initial=50% 50%
group=Visual
multiple=1
value1=(top|center|bottom)||(left|center|right)||(<percentage> <percentage>)
nosupport=IE|FF|CH|SA

[text-align-last]
initial=auto
group=Text
value1=auto|start|end|left|right|center|justify
nosupport=IE|CH|SA

[ruby-align]
initial=auto
group=Ruby
value1=auto|start|left|center|end|right|distribute\-letter|distribute\-space|line\-edge
nosupport=IE|FF|CH|SA

[ruby-overhang]
initial=none
group=Ruby
value1=auto|start|end|none
nosupport=IE|FF|CH|SA

[ruby-position]
initial=before
group=Ruby
value1=before|after|inter\-character|inline
nosupport=IE|FF|CH|SA

[ruby-span]
initial=none
group=Ruby
value1=<attr>|none
nosupport=IE|FF|CH|SA

[string-set]
initial=none
group=Generated Content
value1=<string>|<counter>|content\([^\)]+\)|env\([^\)]+\)|none
nosupport=IE|FF|CH|SA
multiple=1

[tab-size]
initial=8
group=Text
value1=<integer>|<length>
nosupport=IE|FF|CH|SA

[target]
initial=
group=Hyperlinks
value1=<target-name>+<target-new>+<target-position>

[target-name]
initial=current
group=Hyperlinks
value1=current|root|parent|new|modal|<string>
nosupport=IE|FF|CH|SA

[target-new]
initial=window
group=Hyperlinks
value1=window|tab|none
nosupport=IE|FF|CH|SA

[target-position]
initial=above
group=Hyperlinks
value1=above|behind|front|back
nosupport=IE|FF|CH|SA

[text-decoration-color]
initial=currentColor
group=Text
value1=currentColor|<color>
nosupport=IE|FF|CH|SA

[text-decoration-line]
initial=none
group=Text
value1=none|(underline||overline||line\-through)
nosupport=IE|FF|CH|SA

[text-decoration-skip]
initial=objects
group=Text
value1=none|(objects||spaces||ink||edges)
nosupport=IE|FF|CH|SA

[text-decoration-style]
initial=solid
group=Text
value1=solid|double|dotted|dashed|wavy
nosupport=IE|FF|CH|SA

[text-emphasis]
group=Text
value1=<text-emphasis-style>+<text-emphasis-color>

[text-emphasis-color]
initial=currentColor
group=Text
value1=currentColor|<color>
nosupport=IE|FF|CH|SA

[text-emphasis-position]
initial=above right
group=Text
value1=above|below|right|left
nosupport=IE|FF|CH|SA
multiple=1

[text-emphasis-style]
initial=none
group=Text
value1=none|filled|open|dot|circle|double\-circle|triangle|sesame|<string>
nosupport=IE|FF|CH|SA

[text-height]
initial=auto
group=Text
value1=auto|font\-size|text\-size|max\-size
nosupport=IE|FF|CH|SA

[text-justify]
initial=auto
group=Text
value1=auto|inter\-word|inter\-ideograph|inter\-cluster|distribute|kashida|trim

[text-outline]
initial=none
group=Text
multiple=1
value1=<length>||<length>||<color>
nosupport=IE|FF|CH|SA

[text-overflow]
initial=clip
group=Text
value1=clip|ellipsis|<string>

[text-shadow]
initial=yes
group=Text
multiple=1
value1=<length>|<length>||(<length>)||(<length>)||(<color>)
nosupport=IE

[text-space-collapse]
initial=collapse
group=Text
value1=collapse|preserve|preserve\-breaks
nosupport=IE|FF|CH|SA

[text-underline-position]
initial=auto
group=Text
value1=auto|alphabetic|below|left|right
nosupport=IE|FF|CH|SA

[text-wrap]
initial=normal
group=Text
value1=normal|none|unrestricted|suppress
nosupport=IE|FF|CH|SA

[transform]
initial=none
group=Visual
value1=<transform>|none
multiple=1
nosupport=IE

[transform-origin]
initial=50% 50% 0
group=Visual
value1=<percentage>|<length>|top|center|bottom|left|right
multiple=1
nosupport=IE

[transform-style]
initial=flat
group=Visual
value1=flat|preserve\-3d
nosupport=IE

[transition]
initial=
group=Animation and Transition
value1=<transition-property>+<transition-duration>+<transition-timing-function>+<transition-delay>

[transition-property]
initial=all
group=Animation and Transition
value1=<animatable-properties>|none|all|<identifier>
multiple=1
nosupport=IE

[transition-duration]
initial=0
group=Animation and Transition
value1=<time>
multiple=1
nosupport=IE

[transition-timing-function]
initial=ease
group=Animation and Transition
value1=linear|ease|ease\-in|ease\-out|ease\-in\-out|step\-start|step\-end|steps\([^\)]+\)|cubic\-bezier\([^\)]+\)
multiple=1
nosupport=IE

[transition-delay]
initial=0
group=Animation and Transition
value1=<time>
multiple=1
nosupport=IE

[word-break]
initial=normal
group=Text
value1=normal|break\-all|keep\-all
nosupport=FF

[word-wrap]
initial=normal
group=Text
value1=normal|break\-word


'*************
'
'	CSS Aural
'
'*************

[azimuth]
group=Aural
initial=center
multiple=1
value1=<angle>|((left\-side|far\-left|center\-left|center\-right|far\-right|right\-side|leftwards|rightwards|left|center|right)||behind)

[cue]
initial=
group=Aural
value1=<cue-before>+<cue-after>

[cue-after]
initial=none
group=Aural
value1=<uri-audio>|none

[cue-before]
initial=none
group=Aural
value1=<uri-audio>|none

[elevation]
group=Aural
initial=level
value1=<angle>|below|level|above|higher|lower

[pause]
initial=
group=Aural
value1=<pause-before>+<pause-after>

[pause-after]
initial=
group=Aural
value1=<time>|<percentage>

[pause-before]
initial=
group=Aural
value1=<time>|<percentage>

[pitch]
initial=medium
group=Aural
value1=(<frequency>)|(x\-low|low|medium|high|x\-high)

[pitch-range]
initial=50
group=Aural
value1=<number>

[play-during]
initial=auto
group=Aural
multiple=1
value1=<uri-audio>||(mix|repeat)||(auto|none)

[richness]
initial=50
group=Aural
value1=<number>

[rest]
initial=
group=Aural
value1=<rest-before>+<rest-after>

[rest-after]
initial=none
group=Aural
value1=<time>|none|x\-weak|weak|medium|strong|x\-strong

[rest-before]
initial=none
group=Aural
value1=<time>|none|x\-weak|weak|medium|strong|x\-strong

[speak]
initial=
group=Aural
value1=normal|none|spell\-out

[speak-header]
initial=once
group=Aural
value1=once|always

[speak-numeral]
initial=continuous
group=Aural
value1=digits|continuous

[speak-punctuation]
initial=none
group=Aural
value1=code|none

[speech-rate]
initial=medium
group=Aural
value1=<number>|x\-slow|slow|medium|fast|x\-fast|faster|slower

[stress]
initial=50
group=Aural
value1=<number>

[voice-family]
initial=
multiple=1
group=Aural
value1=<specific-voice>+<generic-voice>

[volume]
initial=medium
group=Aural
value1=<percentage>|<number>|silent|x\-soft|soft|medium|loud|x\-loud


'*************
'
'	CSS -moz-
'
'*************

[-moz-animation]
group=Mozilla Extensions
value1=<-moz-animation-name>+<-moz-animation-duration>+<-moz-animation-timing-function>+<-moz-animation-delay>+<-moz-animation-iteration-count>+<-moz-animation-direction>

[-moz-animation-delay]
initial=0
group=Mozilla Extensions
value1=now|<time>
multiple=1

[-moz-animation-direction]
initial=normal
group=Mozilla Extensions
value1=normal|alternate
multiple=1

[-moz-animation-duration]
initial=0
group=Mozilla Extensions
value1=<time>
multiple=1

[-moz-animation-fill-mode]
group=Mozilla Extensions
value1=none|forwards|backwards|both
multiple=1

[-moz-animation-iteration-count]
initial=1
group=Mozilla Extensions
value1=<number>|infinite
multiple=1

[-moz-animation-name]
group=Mozilla Extensions
value1=<string>|none
multiple=1

[-moz-animation-play-state]
initial=running
group=Mozilla Extensions
value1=running|paused
multiple=1

[-moz-animation-timing-function]
initial=ease
group=Mozilla Extensions
value1=ease|linear|ease\-in|ease\-out|ease\-in\-out|cubic\-bezier\([^\)]+\)
multiple=1

[-moz-appearance]
initial=none
group=Mozilla Extensions
value1=none|button|button\-arrow\-down|button\-arrow\-next|button\-arrow\-previous|button\-arrow\-up|button\-bevel|button\-focus|caret|checkbox|checkbox\-container|checkbox\-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist\-button|menulist\-text|menulist\-textfield|menupopup|menuradio|menuseparator|progressbar|progressbar\-vertical|progresschunk|progresschunk\-vertical|radio|radio\-container|radio\-label|radiomenuitem|resizer|resizerpanel|scale\-horizontal|scalethumbend|scalethumb\-horizontal|scalethumbstart|scalethumbtick|scalethumb\-vertical|scale\-vertical|scrollbarbutton\-down|scrollbarbutton\-left|scrollbarbutton\-right|scrollbarbutton\-up|scrollbarthumb\-horizontal|scrollbarthumb\-vertical|scrollbartrack\-horizontal|scrollbartrack\-vertical|searchfield|separator|sheet|spinner|spinner\-downbutton|spinner\-textfield|spinner\-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab\-scroll\-arrow\-back|tab\-scroll\-arrow\-forward|textfield|textfield\-multiline|toolbar|toolbarbutton|toolbarbutton\-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|window|\-moz\-mac\-unified\-toolbar|\-moz\-win\-borderless\-glass|\-moz\-win\-browsertabbar\-toolbox|\-moz\-win\-communicationstext|\-moz\-win\-communications\-toolbox|\-moz\-win\-exclude\-glass|\-moz\-win\-glass|\-moz\-win\-mediatext|\-moz\-win\-media\-toolbox|\-moz\-window\-button\-box|\-moz\-window\-button\-box\-maximized|\-moz\-window\-button\-close|\-moz\-window\-button\-maximize|\-moz\-window\-button\-minimize|\-moz\-window\-button\-restore|\-moz\-window\-frame\-bottom|\-moz\-window\-frame\-left|\-moz\-window\-frame\-right|\-moz\-window\-titlebar|\-moz\-window\-titlebar\-maximized

[-moz-background-inline-policy]
initial=continuous
group=Mozilla Extensions
value1=bounding\-box|continuous|each\-box

[-moz-binding]
group=Mozilla Extensions
value1=none|<uri>

[-moz-border-bottom-colors]
group=Mozilla Extensions
value1=transparent|<color>
multiple=1

[-moz-border-image]
initial=none
group=Mozilla Extensions
value1=none|<url>+<number>|<percentage>+<number>|<percentage>+<number>|<percentage>+<number>|<percentage>+stretch|repeat|round+stretch|repeat|round

[-moz-border-left-colors]
group=Mozilla Extensions
value1=transparent|<color>
multiple=1

[-moz-border-radius]
group=Mozilla Extensions
value1=<-moz-border-radius-topleft>+<-moz-border-radius-topright>+<-moz-border-radius-bottomright>+<-moz-border-radius-bottomleft>

[-moz-border-radius-bottomleft]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-border-radius-bottomright]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-border-radius-topleft]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-border-radius-topright]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-border-right-colors]
group=Mozilla Extensions
value1=transparent|<color>
multiple=1

[-moz-border-start]
group=Mozilla Extensions
value1=<-moz-border-start-width>+<-moz-border-start-style>+<-moz-border-start-color>

[-moz-border-start-color]
group=Mozilla Extensions
value1=transparent|<color>

[-moz-border-start-style]
initial=none
group=Mozilla Extensions
value1=none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[-moz-border-start-width]
initial=medium
group=Mozilla Extensions
value1=thin|medium|thick|<length>

[-moz-border-top-colors]
group=Mozilla Extensions
value1=transparent|<color>
multiple=1

[-moz-box-align]
initial=stretch
group=Mozilla Extensions
value1=start|center|end|baseline|stretch

[-moz-box-direction]
initial=normal
group=Mozilla Extensions
value1=normal|reverse

[-moz-box-flex]
initial=0
group=Mozilla Extensions
value1=<number>

[-moz-box-flexgroup]
initial=0
group=Mozilla Extensions
value1=<number>

[-moz-box-ordinal-group]
initial=0
group=Mozilla Extensions
value1=<number>

[-moz-box-orient]
initial=horizontal
group=Mozilla Extensions
value1=horizontal|vertical

[-moz-box-pack]
initial=start
group=Mozilla Extensions
value1=start|center|end|justify

[-moz-filter]
initial=none
group=Mozilla Extensions
value1=<url>

[-moz-font-feature-settings]
initial=normal
group=Mozilla Extensions
value1=normal|<string>

[-moz-hyphens]
initial=manual
group=Mozilla Extensions
value1=none|manual|auto

[-moz-margin-end]
initial=0
group=Mozilla Extensions
value1=<percentage>|<length>|auto

[-moz-margin-start]
initial=0
group=Mozilla Extensions
value1=<percentage>|<length>|auto

[-moz-mask]
initial=none
group=Mozilla Extensions
value1=<uri>|none

[-moz-outline-radius]
group=Mozilla Extensions
value1=<-moz-outline-radius-topleft>+<-moz-outline-radius-topright>+<-moz-outline-radius-bottomright>+<-moz-outline-radius-bottomleft>

[-moz-outline-radius-bottomleft]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-outline-radius-bottomright]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-outline-radius-topleft]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-outline-radius-topright]
group=Mozilla Extensions
value1=<length>|<percentage>

[-moz-padding-end]
initial=0
group=Mozilla Extensions
value1=<percentage>|<length>|auto

[-moz-padding-start]
initial=0
group=Mozilla Extensions
value1=<percentage>|<length>|auto

[-moz-perspective]
initial=none
group=Mozilla Extensions
value1=<length>|none

[-moz-perspective-origin]
initial=50% 50%
group=Mozilla Extensions
multiple=1
value1=(<percentage>|<length>|left|center|right)||(<percentage>|<length>|top|center|bottom)

[-moz-stack-sizing]
initial=stretch-to-fit
group=Mozilla Extensions
value1=ignore|stretch\-to\-fit

[-moz-text-blink]
initial=none
group=Mozilla Extensions
value1=none|blink

[-moz-text-decoration-color]
initial=currentColor
group=Mozilla Extensions
value1=currentColor|<color>

[-moz-text-decoration-line]
initial=none
group=Mozilla Extensions
multiple=1
value1=none|underline|overline|line\-through

[-moz-text-decoration-style]
initial=solid
group=Mozilla Extensions
value1=solid|double|dotted|dashed|wavy|\-moz\-none

[-moz-transform]
initial=none
group=Mozilla Extensions
value1=<transform>|none
multiple=1

[-moz-transform-origin]
initial=50% 50% 0
group=Mozilla Extensions
multiple=1
value1=(<percentage>|<length>)||(top|center|bottom)||(left|center|right)
multiple=1

[-moz-transform-style]
initial=flat
group=Mozilla Extensions
value1=flat|preserve\-3d

[-moz-transition]
group=Mozilla Extensions
value1=<-PREFIX-transition-property>+<-PREFIX-transition-duration>+<-PREFIX-transition-timing-function>+<-PREFIX-transition-delay>

[-moz-transition-delay]
initial=0
group=Mozilla Extensions
value1=now|<time>
multiple=1

[-moz-transition-duration]
initial=0
group=Mozilla Extensions
value1=<time>
multiple=1

[-moz-transition-property]
initial=all
group=Mozilla Extensions
value1=<animatable-properties>|none|all|<identifier>
multiple=1

[-moz-transition-timing-function]
initial=ease
group=Mozilla Extensions
value1=linear|ease|ease\-in|ease\-out|ease\-in\-out|step\-start|step\-end|steps\([^\)]+\)|cubic\-bezier\([^\)]+\)
multiple=1

[-moz-user-focus]
group=Mozilla Extensions
value1=normal|ignore|none

[-moz-user-input]
initial=none
group=Mozilla Extensions
value1=none|enabled|disabled

[-moz-user-modify]
group=Mozilla Extensions
value1=read\-only|read\-write|write\-only

[-moz-user-select]
group=Mozilla Extensions
value1=none|text|\-moz\-all|\-moz\-none

[-moz-window-shadow]
initial=default
group=Mozilla Extensions
value1=default|none



[-PREFIX-animation]
value1=<-PREFIX-animation-name>+<-PREFIX-animation-duration>+<-PREFIX-animation-timing-function>+<-PREFIX-animation-delay>+<-PREFIX-animation-iteration-count>+<-PREFIX-animation-direction>

[-PREFIX-animation-delay]
initial=0now|<time>


[-PREFIX-animation-direction]
initial=normal
group=Webkit Extensions+normal|alternate


[-PREFIX-animation-duration]
initial=0
group=Webkit Extensions+<time>


[-PREFIX-animation-fill-mode]
group=Webkit Extensions+none|forwards|backwards|both


[-PREFIX-animation-iteration-count]
initial=1
group=Webkit Extensions+<number>|infinite


[-PREFIX-animation-name]
group=Webkit Extensions+<string>|none


[-PREFIX-animation-play-state]
initial=running
group=Webkit Extensions+running|paused


[-PREFIX-animation-timing-function]
initial=ease
group=Webkit Extensions+ease|linear|ease\-in|ease\-out|ease\-in\-out|cubic\-bezier\([^\)]+\)


[-PREFIX-appearance]
initial=none
group=Webkit Extensions+button\-bevel|button|caps\-lock\-indicator|default\-button|caret|checkbox|listbox|listitem|media\-fullscreen\-button|media\-mute\-button|media\-play\-button|media\-seek\-back\-button|media\-seek\-forward\-button|media\-sliderthumb|media\-slider|menulist\-button|menulist\-text|menulist\-textfield|menulist|none|push\-button|radio|scrollbarbutton\-down|scrollbarbutton\-left|scrollbarbutton\-right|scrollbarbutton\-up|scrollbargripper\-horizontal|scrollbargripper\-vertical|scrollbarthumb\-horizontal|scrollbarthumb\-vertical|scrollbartrack\-horizontal|scrollbartrack\-vertical|searchfield\-cancel\-button|searchfield\-decoration|searchfield\-results\-button|searchfield\-results\-decoration|searchfield|slider\-horizontal|slider\-vertical|sliderthumb\-horizontal|sliderthumb\-vertical|square\-button|textarea|textfield

[-PREFIX-background-clip]
initial=border
group=Webkit Extensions+border|content|padding|text

[-PREFIX-background-composite]
initial=border
group=Webkit Extensions+border|padding

[-PREFIX-background-origin]
initial=border
group=Webkit Extensions+border|padding|content

[-PREFIX-background-size]
initial=auto
group=Webkit Extensions+<length>|<percentage>|auto|cover|contain


[-PREFIX-border-bottom-left-radius]
group=Webkit Extensions+<length>+<length>

[-PREFIX-border-bottom-right-radius]
group=Webkit Extensions+<length>+<length>

[-PREFIX-border-horizontal-spacing]
group=Webkit Extensions+<length>

[-PREFIX-border-image]
initial=none
group=Webkit Extensions+none|<url>+<number>|<percentage>+<number>|<percentage>+<number>|<percentage>+<number>|<percentage>+stretch|repeat|round+stretch|repeat|round+stretch|repeat|round+stretch|repeat|round

[-PREFIX-border-radius]
group=Webkit Extensions+<length>+<length>

[-PREFIX-border-top-left-radius]
group=Webkit Extensions+<length>+<length>

[-PREFIX-border-top-right-radius]
group=Webkit Extensions+<length>+<length>

[-PREFIX-border-vertical-spacing]
group=Webkit Extensions+<length>

[-PREFIX-box-align]
group=Webkit Extensions+baseline|center|end|start|stretch

[-PREFIX-box-direction]
group=Webkit Extensions+normal|reverse

[-PREFIX-box-flex]
group=Webkit Extensions+<number>

[-PREFIX-box-flex-group]
group=Webkit Extensions+<integer>

[-PREFIX-box-lines]
group=Webkit Extensions+multiple|single

[-PREFIX-box-ordinal-group]
group=Webkit Extensions+<integer>

[-PREFIX-box-orient]
group=Webkit Extensions+block\-axis|horizontal|inline\-axis|vertical

[-PREFIX-box-pack]
group=Webkit Extensions+center|end|justify|start

[-PREFIX-box-shadow]
initial=none
group=Webkit Extensions+<length>+<length>+<length>+<color>

[-PREFIX-box-sizing]
group=Webkit Extensions+content\-box|border\-box

[-PREFIX-column-break-after]
group=Webkit Extensions+always|auto|avoid|left|right

[-PREFIX-column-break-before]
group=Webkit Extensions+always|auto|avoid|left|right

[-PREFIX-column-break-inside]
group=Webkit Extensions+auto|avoid

[-PREFIX-column-count]
group=Webkit Extensions+<integer>|auto

[-PREFIX-column-gap]
group=Webkit Extensions+<length>|normal

[-PREFIX-column-rule]
group=Webkit Extensions+<-PREFIX-column-rule-width>+<-PREFIX-column-rule-style>+<-PREFIX-column-rule-color>

[-PREFIX-column-rule-color]
group=Webkit Extensions+currentcolor|transparent|<color>

[-PREFIX-column-rule-style]
group=Webkit Extensions+none|dotted|dashed|solid|double|groove|ridge|inset|outset|hidden

[-PREFIX-column-rule-width]
group=Webkit Extensions+<length>|medium|thick|thin

[-PREFIX-columns]
group=Webkit Extensions+<-PREFIX-column-width>+<-PREFIX-column-count>

[-PREFIX-column-width]
group=Webkit Extensions+<length>|auto

[-PREFIX-line-break]
initial=normal
group=Webkit Extensions+after\-white\-space|normal

[-PREFIX-margin-bottom-collapse]
group=Webkit Extensions+collapse|discard|separate

[-PREFIX-margin-collapse]
group=Webkit Extensions+<-PREFIX-margin-top-collapse>+<-PREFIX-margin-bottom-collapse>

[-PREFIX-margin-start]
group=Webkit Extensions+<percentage>|<length>|auto

[-PREFIX-margin-top-collapse]
group=Webkit Extensions+collapse|discard|separate

[-PREFIX-marquee]
group=Webkit Extensions+<-PREFIX-marquee-direction>+<-PREFIX-marquee-increment>+<-PREFIX-marquee-repetition>+<-PREFIX-marquee-style>+<-PREFIX-marquee-speed>

[-PREFIX-marquee-direction]
group=Webkit Extensions+ahead|auto|backwards|down|forwards|left|reverse|right|up

[-PREFIX-marquee-increment]
group=Webkit Extensions+<percentage>|<length>|large|medium|small

[-PREFIX-marquee-repetition]
group=Webkit Extensions+<integer>|infinite

[-PREFIX-marquee-speed]
group=Webkit Extensions+<integer>|<time>|fast|normal|slow

[-PREFIX-marquee-style]
group=Webkit Extensions+alternate|none|scroll|slide

[-PREFIX-mask]
group=Webkit Extensions+<-PREFIX-mask-attachment>+<-PREFIX-mask-clip>+<-PREFIX-mask-origin>+<-PREFIX-mask-image>+<-PREFIX-mask-repeat>+<-PREFIX-mask-composite>

[-PREFIX-mask-attachment]
group=Webkit Extensions+fixed|scroll

[-PREFIX-mask-box-image]
group=Webkit Extensions+<uri>+<length>+<length>+<length>+<length>+repeat|stretch|round+repeat|stretch|round

[-PREFIX-mask-clip]
group=Webkit Extensions+border|content|padding

[-PREFIX-mask-composite]
initial=border
group=Webkit Extensions+border|padding

[-PREFIX-mask-image]
group=Webkit Extensions+<url>

[-PREFIX-mask-origin]
group=Webkit Extensions+border|content|padding

[-PREFIX-mask-position]
group=Webkit Extensions+<length>|<percentage>|top|left|center|right|bottom


[-PREFIX-mask-position-x]
group=Webkit Extensions+<length>|<percentage>|top|left|center|right|bottom

[-PREFIX-mask-position-y]
group=Webkit Extensions+<length>|<percentage>|top|left|center|right|bottom

[-PREFIX-mask-repeat]
group=Webkit Extensions+repeat\-x|repeat\-y|no\-repeat|repeat

[-PREFIX-mask-size]
group=Webkit Extensions+<length>


[-PREFIX-nbsp-mode]
initial=normal
group=Webkit Extensions+normal|space

[-PREFIX-padding-start]
group=Webkit Extensions+<percentage>|<length>

[-PREFIX-rtl-ordering]
group=Webkit Extensions+logical|visual

[-PREFIX-text-fill-color]
group=Webkit Extensions+currentcolor|transparent|<color>

[-PREFIX-text-security]
group=Webkit Extensions+circle|disc|none|square

[-PREFIX-text-stroke]
group=Webkit Extensions+<-PREFIX-text-stroke-width>+<-PREFIX-text-stroke-color>

[-PREFIX-text-stroke-color]
group=Webkit Extensions+currentcolor|transparent|<color>

[-PREFIX-text-stroke-width]+<length>|medium|thick|thin

[-PREFIX-transform]+none<transform>|

[-PREFIX-transform-origin]+50% 50%<percentage>|<length>|top|center|bottom|left|right

[-PREFIX-transform-origin-x]+50% 50%<percentage>|<length>

[-PREFIX-transform-origin-y]+50% 50%<percentage>|<length>

[-PREFIX-transition]+<-PREFIX-transition-property>+<-PREFIX-transition-duration>+<-PREFIX-transition-timing-function>+<-PREFIX-transition-delay>

[-PREFIX-transition-delay]+0now|<time>

[-PREFIX-transition-duration]+0<time>

[-PREFIX-transition-property]+<animatable-properties>|none|all|<identifier>

[-PREFIX-transition-timing-function]+(ease)linear||ease\-in|ease\-out|ease\-in\-out|step\-start|step\-end|steps\([^\)]+\)|cubic\-bezier\([^\)]+\)

[-PREFIX-user-drag]
auto|element|none

[-PREFIX-user-modify]
read\-only|read\-write|read\-write\-plaintext\-only

[-PREFIX-user-select]
auto|none|text
