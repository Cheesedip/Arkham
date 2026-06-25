import type { Location } from './location.model';

export const ACT2_LOCATIONS: Location[] = [
  {
    id: 0,
    name: 'Italian Restaurant La Luna',
    introText: `You step into La Luna, the soft hum of conversation and clinking plates settling around you. The place feels familiar, though you're certain you've never been here before.

You sit down. Order the lasagna. It arrives quickly.

Too quickly. Probably from the freezer...

As you eat, your eyes drift to the back of the restaurant.

A heavy curtain hangs there. Beside it stands a man in a dark suit, watching the room.

You finish your meal, wipe your hands, and stand.

The man's gaze shifts the moment you approach.

"What's behind the curtain?" you ask.

"Private," he replies flatly.

You lean in slightly and tell the man: "The chance of you letting me in is 50/50... either you do, or you don't."

You pull your jacket aside just enough to reveal a badge.

"PhD in Statistics."

He looks impressed and steps aside.

You sit down at an empty seat at one of the gambling tables and put down 200 euros.

Across from you sits someone in a dark hoodie, head low, face hidden.

The dealer begins.

Cards slide. Chips move. You glance at the figure.

Suddenly they speak slowly: "If you came to stop us, Rik... you're already too late."

Then he puts in a few chips and says "The chance of you having a better hand than me is statistically negligible" voice muffled beneath the hood.

The figure chuckles softly, then louder and louder until he is bellowing with laughter.
"But you wouldn't know anything about statistics."

He suddenly slams his cards down.

"All in!"

Before anyone can react, he kicks his chair back violently and bolts for the exit.

He doesn't make it far.

Just before the curtain, his foot lands on something round -

- an Italian meatball, dropped and forgotten.

He slips.

Hard.

The hood flies back as he crashes to the floor.

For a moment, everything freezes.

Then you see his face.

Thomas Klausch.`,
    good: `"GRAB HIM!" Thomas shouts.

Two guards step forward, reaching for you - but you're already moving. You sweep the pile of chips and cash off the table in one motion, stuffing it into your jacket as you slip past the table, duck one grasping hand, and push through the curtain before they can close in.

The night air hits you as you burst outside.

You don't look back.`,
    bad: `The moment Thomas hits the floor, everything moves at once.

You hesitate - just a second too long.

Hands grab you from both sides. You struggle, but your jacket is pulled tight, something tearing loose as they drag you back.

Your prized PhD badge slips free - hits the ground.

Gone.

They shove you hard, your money scattering across the table as someone sweeps it away without even looking.

You wrench yourself free and stumble back, barely managing to escape through the curtain.

By the time you break free, you're bruised, your arm throbbing where they grabbed you, your pockets empty.

And in your head -

You can still hear Thomas laughing.`,
    attached: [1, 2]
  },
  {
    id: 1,
    name: 'Snackbar De Frietketel',
    introText: `From the outside, the snackbar looks worn down and outdated, its flickering neon sign half-lit above a greasy window smeared with fingerprints. The menu board is sun-faded and peeling, and the door rattles slightly in its frame when you step into the snackbar.

The harsh fluorescent lights buzz overhead. The smell of frying fat hangs thick in the air.

You keep it casual.

"One frikandel speciaal, please."

The guy behind the counter stares at you for a second too long. Then nods.

"...Yeah."

He turns to the fryer - but his movements are off. Hesitant. Like he's figuring it out step by step.

He grabs the wrong utensil.

Uses it anyway.

Squirts mustard. Stops halfway. Looks at it. Shrugs.

Your eyes drift toward the back.

A door stands slightly ajar.

And from beneath it -

A pair of feet.

Completely still.

You look back at the man.

He's noticed.

For a split second, neither of you moves.

Then -

He grabs the fryer basket, filled with bubbling fat, and hurls it toward you.

You twist, stumble back as the grease splashes past you, hissing against the floor.

By the time you look up, he's already running.

Through the back.

You follow.

The door slams open as you push through -

Crates are stacked everywhere. Boxes of snacks piled high. Kroketten. Frikandellen. Bitterballen.

Several hooded figures move quickly, loading everything into the back of a van.

All of them marked with the same crude A.

On the side of the van - a large poster, depicting an Eagle.

One of them spots you.

"Go!"

The doors slam shut.

The engine roars to life.

You sprint forward -

Too late.

The van peels away, tires screeching, leaving only the smell of burnt fat and something faintly... briny.`,
    good: `You don't stop running.

The van disappears around the corner - but just before it turns, something tumbles loose from the back, hitting the pavement with a dull thud. You rush forward, pry it open, and inside you find stacks upon stacks of brightly colored fliers.

All of them show the same image:

The Big Five. A safari jeep.

And beneath them, in cheerful lettering:

"Drinks with a Dingo."`,
    bad: `You attempt to run after the van - but your foot immediately slips on the grease coating the floor.

You hit the ground hard.

By the time you look up, the van is already gone, its sound fading into the distance.

Behind you, the back door creaks open again.

You're not alone anymore.

And whatever was left behind... is now moving.`,
    attached: [0, 2, 4]
  },
  {
    id: 2,
    name: 'The Saltmere Pet Store',
    introText: `You round the corner -

- and stop.

Police lights flash across the storefront. Two officers stand at the entrance, talking with the pet store owner.

From the outside, the pet store appears normal at first, its bright signage still lit and cheerful. But the windows are dark and fogged from the inside, with streaks running downward as if something had tried to come out.

You back off immediately, circle around, and slip through the loading dock instead.

Inside, it's chaos.

Pet food ripped open everywhere. Shelves are completely empty. Deep drag marks cut across the floor, as if entire pallets were pulled out in a hurry.

You carefully open the door into the store -

Cages hang open. Metal bent outward. Glass shattered.

A sign lies on the floor:

LARGE DOG

You hear breathing.

Behind the aisle.

It steps out.

Too tall. Spine arched. Front legs twice as long as its hind legs. Its head split down the middle, revealing a second jaw beneath, packed with needle teeth. Four eyes fix on you, one after the other.

It takes one slow step closer.

That's enough.

You turn -

- and bolt.`,
    good: `You don't look back.

As you run, something clicks - its posture, its movement, the way it watches instead of immediately lunging. Your animal knowledge kicks in. This isn't a predator chasing prey.

It's territorial.

Instead of sprinting straight for the exit, you veer off, giving it space rather than triggering pursuit. The creature pauses, confused, watching you leave its territory.

You slip through the loading dock and out into the alley, heart racing.

It doesn't follow.`,
    bad: `You turn and run - without thinking.

You have no idea what you're dealing with.

No idea why it moves the way it does, or why it waits before attacking. You miss every sign, every cue, every chance to react differently.

You run like prey.

And that's all it needs.

It lunges.

It slams into you, knocking you hard to the ground as claws tear into your side. Panic takes over - you scramble, kick blindly, somehow breaking free long enough to crawl toward the exit.

You make it outside.

Barely.

You stagger back, shaking, breath uneven, pain burning through your side.`,
    attached: [0, 1, 3]
  },
  {
    id: 3,
    name: 'The Graveyard',
    introText: `You make your way into the graveyard, the air colder here, heavier.

Ahead, a circle of figures stands between crooked headstones. Black gowns, unmoving. On each of their backs, a large letter A, crudely stitched in pale thread.

One of them is digging.

Slow, rhythmic movements, metal striking earth.

The others chant - low, uneven, the words slipping just beyond understanding.

You step closer, careful, trying to catch what they're saying.

A twig snaps under your foot.

Silence.

All of them stop at once.

Then, slowly... they turn.

Your breath catches.

Their hoods fall back.

Faces you recognize.

Each one.

Every single one of them.

Your exes.

Their expressions twist - full of accusation.

"You never loved me."

"You said it was different this time."

"You promised."

Their voices overlap, rising, circling you like the chant had.

The one at the grave grips the edge of the pit and pulls something upward -

Something moves inside.

You take a step back.

A pale hand shoots out of the darkness, clawing at the soil.

Then another.

The ground shifts violently as a ghoul drags itself free - mud-covered, jaw hanging loose, eyes hollow and wide.

It lets out a wet, broken snarl -

- and lunges toward you.`,
    good: `You don't hesitate.

The voices hit - but they don't land the way they used to. You've worked through this. Talked it through. Pulled it apart piece by piece.

You know what this is.

"I did what I could."

You turn and run before the ghoul can close the distance, its claws scraping against stone just behind you as you slip between the graves and out of reach.

You don't look back.`,
    bad: `The voices hit harder than they should.

You stop.

"What did I do wrong...?"

For a moment you actually consider it - whether you should say something, whether you owe them one more apology.

That hesitation costs you.

The ghoul slams into you, knocking you to the ground, rotten breath in your face, claws tearing into your arm before you kick it off and scramble away.

You barely make it out alive.

Their voices follow you the whole way.`,
    attached: [2, 4]
  },
  {
    id: 4,
    name: 'The Driftwood Gull Tavern',
    introText: `Nestled between the harbor warehouses and the edge of the Town Square stands the Driftwood Gull Tavern, a broad, weatherworn building that has served sailors, fishermen, and travelers for longer than anyone can accurately remember. Its faded sign creaks gently in the sea breeze, depicting a gull whose paint has almost entirely peeled away beneath decades of sun and salt.

You step inside the Driftwood Gull Tavern, the heavy door closing behind you with a dull thud. You walk up to the bar. "I'll have a Warlu Ember IPA," you say.

The barman frowns. "A what?"

Rik exhales sharply.

"The Warlu Ember IPA," you repeat, more slowly than necessary. "Small-batch brew. Indigenous Australian cooperative. Native citrus, wild yeast. It's not exactly obscure."

A pause.

The barman blinks.

"...We've got Amstel."

You stare at him.

For a moment, it's not even anger. Just disbelief.

"...Amstel," you repeat, slowly, as if testing the word in your mouth and finding it offensive.

A long exhale.

"Fine."

He nods, relieved, and reaches for the tap.

It sputters.

Nothing.

He frowns, mutters something under his breath, and wipes his hands on a rag.

"Hold on," he says, already turning.

He disappears through the small door behind the bar.

You wait.

A minute passes.

Then five.

Then ten.

...He doesn't come back.

You look around but no-one reacts.

You step around the bar.

The cellar door creaks open when you push it.

---

The stairs descend into darkness.

At the bottom, you see him.

The barman.

Or what's left of him.

He is slumped against a broken rack of barrels, his body twisted unnaturally, one arm stretched toward the stairs as if he tried to crawl back up. The skin along his neck and chest is torn open - not cleanly, but pulled apart, as if something forced its way through from the inside.

The barrels around him are split. You step back -

- and your foot catches on something.

A piece of cloth.

Black.

Rough.

You pick it up.

A torn strip from a robe.

Marked faintly with the shape you've seen before.

The letter A.

Behind you, from somewhere deeper in the cellar -

Something shifts.

You turn -

and get the hell out of there.`,
    good: `You move without thinking, your eyes searching for another way out, and as you turn you almost stumble into a side room you hadn't noticed before. The door hangs slightly open, revealing a small space with a table covered in scattered papers.

You step inside just long enough to look, your attention immediately drawn to a list.

Your eyes scan the page until one line stands out clearly:

Craft beers - enough to last 200 customers a full evening.

Beneath it, written in the same careful hand:

Event: "Drinks with a Dingo."`,
    bad: `You turn and rush up the stairs, not stopping, not looking back.

You push through the door and step into the tavern -

- and everything is exactly the same.

The same low conversations. The same unmoving figures. No one reacts to your return. No one looks at you.

You stand there for a moment, catching your breath, the piece of black cloth still in your hand.

Nothing makes sense.

And you are no closer to understanding what is happening here.`,
    attached: [3, 1]
  }
];
