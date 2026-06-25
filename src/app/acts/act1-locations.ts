import type { Location } from './location.model';

export const ACT1_LOCATIONS: Location[] = [
  {
    id: 0,
    name: 'Old Market',
    introText: `Once the beating heart of Saltmere Point, the Old Market now lies abandoned beneath the relentless summer sun. Long rows of weathered stalls stand empty beneath torn canvas awnings that creak softly in the dry coastal wind. Dust gathers thick upon counters where merchants once traded fish, spices, and peculiar antiques brought from distant shores. Faded signs sway gently overhead, their lettering nearly erased by salt and time.

Scattered among the abandoned stalls remain curious objects no one seems willing to claim - cracked mirrors, water-damaged books, rusted lockboxes, and sun-bleached trinkets left exactly where they were years ago.

Your attention drifts across the market until something catches your eye. Something strangely ordinary.

A small, chipped garden gnome beer opener, its faded paint flaking at the edges, one hand gripping the opener, the other raised in a crude, defiant middle finger.

Something about it feels familiar.

You pick it up.

The market disappears.

You stand dressed for your wedding.

Music plays somewhere nearby, distorted as though underwater.

Guests sit motionless.

Your friends are present - Robin laughing nervously, Maikel adjusting his collar, Romin staring toward the aisle, Jurrian pale and silent, Ingmar speaking to someone you cannot see.

Then a voice behind you whispers:

"You were meant to arrive alone."

A high, splintering shriek rises from the floorboards as pale, crooked hands begin pushing through the gaps between the planks.

You wake and stumble backwards`,
    good: `Your heel catches just in time, and you steady yourself before you can fall.`,
    bad: `Your ankle twists sharply as you fall back, pain shooting up your leg as something gives. Take 1 doom`,
    attached: [3, 5, 1]
  },
  {
    id: 1,
    name: 'Post Office',
    introText: `The post office is silent, though the lights hum faintly overhead. Stacks of yellowed letters sit in crooked piles. Behind the counter, a clerk with ink-stained fingers slowly sorts envelopes.

  The clerk does not look up as you approach, his ink-stained fingers continuing their slow, methodical sorting. After a moment, he speaks in a low, measured tone: "There have been... issues with your wedding invitations." He slides a thick bundle across the counter.

  All of the wedding invitations have been returned.

  Each envelope is stamped "RETURN TO SENDER" in thick, uneven ink, pressed so hard it tears the paper.

  But beneath the printed addresses, something else has been written - thin, frantic scribbles crawling across the surface, as if added later.

  The handwriting does not match.

  It loops and twists, repeating the same phrases over and over:

  "DON'T ATTEND."

  "UNION"

  "NOT PERMITTED."

  "RITUAL"

  "REMAIN UNSEEN."

  On some envelopes, the writing grows denser until it covers the names entirely.

  On one, the ink has been scratched in so deeply it has gone through the paper -

  He leans in just enough for you to hear him clearly. "I'm afraid... you'll have to redraw them. All of them."`,
    good: `You force your hands to steady and begin again - clean lines, careful strokes, faster than you thought possible. A new design takes shape, elegant and precise, free from the distortions that plagued the originals.

  When you are finished, you slide the stack across the counter.

  The clerk stops sorting.

  He studies them in silence, one by one.

  A slow nod.

  "These will do."

  He gathers the invitations carefully.

  "With additional precautions... they will arrive this time."`,
    bad: `You try to fix them.

  Cross things out. Rewrite names. Patch what is broken.

  But the ink smears. The paper tears. The words will not hold.

  It's useless.

  Frustration spikes.

  "This is your job," you snap, shoving the ruined stack toward him. "You had one thing to do."

  The clerk does not react.

  You grab the invitations again.

  "I'll take my business elsewhere."

  You turn and walk out, the damaged paper crumpling slightly in your grip - still marked, still wrong.`,
    attached: [4, 0, 2]
  },
  {
    id: 2,
    name: 'Town Square',
    introText: `At the center of Saltmere Point lies the Town Square, a broad expanse of pale stone basking beneath the relentless summer sun. Though quieter than one might expect for the heart of a coastal settlement, the square is by no means abandoned. Elderly locals sit motionless beneath shaded porches, speaking in low murmurs that cease whenever you draw near. Shopkeepers lazily sweep already spotless doorways, and now and then a child may dart across the square before vanishing down some narrow side street.

An address sits clear in your mind. Third building along a narrow side street. Faded blue door. Brass number hanging loose. You arrive. The door stands ajar. Shelves line the walls, cluttered with parcels, boxes, things wrapped in cloth. A thin pale man in a dark mask.

"Ah," he says softly. "You finally made it."

Your eyes drift past him.

There.

On the table.

Your package.

He lifts a hand, stopping you.

A slow grin spreads wider.

"Everything here has a price," he says, placing a worn deck of cards on the table. "Yours comes cheap."

He begins to shuffle.`,
    good: `The cards fall in your favor. The man's grin falters for just a moment before he slowly slides the package across the table toward you. "A fair game," he murmurs.`,
    bad: `The final card lands - and you've lost. The man leans back, amused. "Then I suppose you'll have to leave empty-handed."

You do not. You lunge for the package - your elbow slams hard into the edge of the table, a sharp jolt shooting through your arm as you grab it and bolt for the door.

Behind you, his voice follows, calm and certain:

"Careful, Rik... some outcomes aren't meant to be altered."`,
    attached: [3, 1]
  },
  {
    id: 3,
    name: 'Grand Theater',
    introText: `The Grand Theater rises at the edge of Saltmere Point. Torn velvet banners hang limp above tall arched doors, and cracked glass panels catch the sunlight in dull glints. Inside, rows of empty seats stretch toward a dimly lit stage. You step inside, drawn by the certainty that this is where the band for your wedding should currently be practicing.

  Figures stand on stage. Skin stretched thin and colorless, eyes sunken deep, lips dry and cracking. Their bodies, timeworn to the bone.

  Then -

  A note.

  Their movements seem slightly delayed, like puppets pulled by unseen strings

  A guitar hums to life. Soft. Familiar.

  Another joins. A rhythm begins to form, the opening bars of a song you almost recognize. The sound fills the theater, echoing through the empty seats, growing clearer with each second.

  You take another step closer.

  Suddenly -

  Silence.

  Every instrument cuts off at once.

  The band turns in unison.

  All eyes fix on you.

  Waiting.`,
    good: `You recognize the song - Reptilia. The band is missing its drummer. You grab your sticks, jump behind the kit, and pick up the rhythm.

  As you play, the music locks into place - and the figures on stage shift, their hollow forms filling with life and energy once more.

  By the final note, they're no longer empty.

  You grin.

  This wedding is going to be a blast.`,
    bad: `You squint, trying to place the song.

  "...Sgt. Pepper?"

  That can't be right.

  You were very clear - no Beatles covers.

  Still, you take your place behind the drums and try to follow along. The rhythm doesn't fit. Nothing lines up.

  It's wrong.

  After a few frustrating attempts, you stop. This isn't going anywhere.

  You stand, shake your head, and step off the stage.

  Great.

  Now you'll have to find another band.`,
    attached: [0, 2, 6]
  },
  {
    id: 4,
    name: 'Jewelry Store',
    introText: `The jewelry store stands wedged between two bigger storefronts, its faded sign hanging crooked above a dusty display window.

You push the door open.

Dust coats every glass case, yet one space stands untouched. Behind the counter rests a single pair of rings, catching a faint, unnatural glint of light.

Across the wooden floor, a deep line has been carved straight through the center of the room.

At your feet, scratched into the wood:

don't cross

Just before the line lies a small pile of smooth, weighted balls.

Beyond it, near the rings, a narrow metal dish rises from the counter.

A faint, wet sound stirs somewhere behind you.

You ignore it and throw.

The ball arcs through the dim air -

And misses.

It strikes the counter with a dull crack and bounces away.

The sound lingers.

From the edges of the room, dark ooze begins to seep between the floorboards, thick and slow at first, then gathering pace as it stretches toward you in thin, reaching strands.

Closer.

You grab another ball, breath tightening, eyes locked on the dish.

You throw again.

Clink.

The ball lands cleanly.

A sharp metallic click echoes from within the counter. The glass trembles, and the rings shift - sliding just a little closer to you.

Behind you -

The ooze keeps coming.`,
    good: `You grab another ball, steady your aim, and throw.

Clink.

Another sharp click echoes. The rings slide forward, just within reach.

The ooze is almost at your feet now.

You don't waste a second - stepping up to the line, leaning just far enough to grab them.

Cold metal in your hand.

You pull back immediately.

The ooze recedes as quickly as it came, sinking back into the floorboards.

The room falls still.

The rings are yours.`,
    bad: `You aim again - but your hands are already shaking.

You throw.

Clink.

The rings shift closer - but not enough.

The ooze surges forward, faster now, flooding across the floor in thick, reaching strands. It's already at your feet, climbing, pulling.

Too slow.

You grab one last ball and throw -

Clink.

The mechanism snaps, the rings slide within reach -

- but the ooze is already on you.

Cold and heavy, it clings to your legs as you lunge forward, barely managing to grab the rings before it engulfs you.

You tear yourself free and run.

Outside, it doesn't let go.

It clings. Spreads.

You don't think - you sprint for the shore and dive into the sea, the dark water closing over you as you desperately try to wash it off.`,
    attached: [1, 5]
  },
  {
    id: 5,
    name: 'Saltmere Park',
    introText: `Saltmere Park stretches along the cliffs just beyond the town, where dry grasslands meet the restless sea below. Once carefully maintained, it now feels slightly neglected - paths overgrown, gardens uneven, and statues half-hidden between tall grass swaying in the coastal wind.

Just off the winding path, something catches your eye.

A torii gate stands half-buried beneath twisted vines and dry growth. A quiet pull draws you closer. You pass beneath the gate. The air presses in, heavy against your chest. The world stutters. Then - you stand in a garden transformed.

Carefully arranged stones form perfect patterns across pale gravel, each line carved with impossible precision. Trees curve in graceful arcs, every branch placed with intent. A narrow stream winds through the space, its surface smooth, flowing in complete silence.

You move a bush aside -

and stop.

Where there was nothing before, a Japanese temple now stands, pristine and untouched, its wooden beams clean and perfect against the wind-worn landscape.

You step inside the temple. The interior opens wide before you, with bare wooden floors stretching toward a single point at the center of the room. There, a samurai sits kneeling in perfect stillness, his armor immaculate, as though time has never touched him. For a moment, he does not move, and then, slowly, he tilts his head and raises one hand, beckoning you to come closer.`,
    good: `You step forward and stop in front of him. The samurai studies you for a moment, his gaze calm and unreadable, before he slowly rises to his feet. Without a word, he reaches into his robes and produces a small carved statue.

He places it carefully into your hands - a monkey, intricately detailed, gripping a tiny knife.

When you look up again. The temple is gone. You are back in the park, the wind moving through the grass as before, and the only thing that remains is the torii gate standing quietly where the temple once stood.`,
    bad: `You step closer, uncertainty creeping in with every step. The samurai begins to rise, then with a sudden movement his form twists violently as the plates of his armor split apart. Limbs stretch into unnatural shapes, his face distorting into something unrecognizable. The room seems to shrink around it. You don't wait to see more - you turn and run, the sound of something enormous unfolding behind you.

Then -

suddenly, you are back in the park.

You stagger slightly, out of breath, the wind rushing past you as if nothing ever happened. The grass sways calmly, but your heart is racing, and the memory of that thing lingers far too vividly in your mind.`,
    attached: [0, 4, 6]
  },
  {
    id: 6,
    name: 'Tuxedo Shop',
    introText: 'A classy shop selling formal wear.',
    good: 'Elegant outfits available.',
    bad: 'Prices are very high.',
    attached: [5, 3]
  }
];
