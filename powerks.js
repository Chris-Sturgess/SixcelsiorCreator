const POWERKS = [{
	name: '360 Sense',
	cost: '(1+)',
	description: `your senses operate in 360 degrees in three dimensions allowing you to sense the territory around you to within your regular range. Once per Session per Amp ignore a Surprised condition. Ignore the multiple opponent penalty to your static defenses (see Combat).`
},{
	name: 'Absorb',
	cost: '(5+)',
	description: `lets you transform five points of damage or offensive effect (for non-wounding attacks) inflicted upon you into one Power Point worth of a single prespecified, Powerk, Perk or Skill/Specialization. The proportion of damage/effect Absorbed does not otherwise affect you. The Absorb-granted power is determined when you buy Absorb. Absorption of less than 5 damage/effect points doesn’t add to the granted power. 
The maximum number of Power Points held at any one time can’t exceed your Absorb’s Power Point cost. Once that limit is met, you can no longer Absorb, and you take subsequent injuries/effects normally. The manifested Absorb-granted powers can never exceed a Power Point value greater than your Absorb’s Amplitude. Powerks without a pre-stated Duration are assumed to last for a Scene. All Absorb-granted powers must still abide by their specified Limits. Unused Absorbed Power Points are gone by Session’s end.
So, Captain Sponge has 8 Amps of Absorb to Mighty Scale, for a cost of 12 Power Points. That means he can Absorb a maximum amount of damage/effect of 5 times his cost (60 points of damage/effect), hold 12 Power Points in reserve and manifest up to 8 Power Points of Mighty Scale, for a Scene.
Absorb Focuses by the type of damage or offensive effect it can Absorb, but not by the Absorb-granted ability. Thus, the granted ability must always be determined at purchase; different Absorb-granted abilities are considered separate Powerks. Common examples include Absorb to Heal or Absorb to Mighty Might. A Focus might be Absorb Kinetic Energy to Mighty Soak or Absorb Energy to X-Blast and so on. Absorb cannot be one of the Absorb-granted powers.`
},{
	name: 'Adaptability',
	cost: '(1+)',
	description: `your body changes to accommodate hazards in your environment. After 1 Round of exposure to harm from an attack or an environment, you develop defenses against it. Such defenses take the form of Perks, Powerks or Skills and must be agreeable to your GM and cannot exceed the Amplitude of your Adaptability. Examples include Life Support, Mighty Soak, Armor, Immunity, Force Field and so on. They will not typically manifest as offensive capabilities.
Adaptability will change according to the threat presented and will always require a Round to manifest. Duration: Scene`
},{
	name: 'Afflict',
	cost: '(1+)',
	description: `allows you to “curse” your opponent, inflicting an unwanted Complication or condition on them. Once successfully targeted, your Afflict D-code must overcome your target’s Will. Success allows you to impose a Complication, Powerk effect, Disease or Skill deficit, equal to the Power Point value of your Afflict. 
The nature of the Affliction must be specified, and each type of Affliction is considered a separate Powerk.
Complications and Diseases are assumed to be worth 4 Power Points each. For example, if you wish to impose the Complication “Clutz”, you’d need an Afflict Power Point value of at least 4. 
Powerks and Skills can be diminished on a Power Point per Power Point basis. Thus, removing someone’s Attractive Perk (a 1 Point Perk) would be one Power Point. Replacing it with the Ugly Complication would require another 4 Power Points, for a total of 5. Removing 3D of Brawl Skill would require 3 Power Points. Skills can’t be dropped below their governing Attributes, however the Attributes themselves can be reduced, each pip valued at 2 Power Points.
Powerk-like effects (Mini Scale, Incorporeal etc.) can also be Afflicted, at a cost equal to their Power Point value. With GM permission, by spending a Hero Point you can make an Affliction permanent. But by spending a Hero Point, your target can also dispel them. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Technology or Will. `
},{
	name: 'Alter Age',
	cost: '(5+)',
	description: `you can make things grow older or younger and create visible signs of senescence (greying hair, wrinkling skin, pants pulled up too high etc.), or youth (weakness, smaller stature, poor work ethic etc.). You may use Alter Age to damage targets directly, pitting your D-code against either Stamina or Will (determined at purchase), or Structure if used against objects. 
Alter Age lets you simulate other effects of age, instead of inflicting damage, equal to Alter Age’s Amplitude in Power Points, as a Flex Powerk. Unless otherwise specified, the effect lasts for the Scene. Suggestions include removal of Power Points from abilities or Attributes susceptible to the ravages of time (through Negate or Diminish; see below), or Afflicting age appropriate Complications such as Not So Fast and Elderly. Complications cost 4 Power Points each. At GM discretion, you may add your D-code to any attempts to disguise the target as something/someone younger/older than they are. 
At the Duration’s end, your target changes back to their normal age. Sacrificing a Hero Point makes this Age change permanent, your target can sacrifice one of their own to dispel it. Damage however recovers normally.
First-degree Focus includes choosing either to make targets older or to make them younger. Immortal, un-aging or indestructible objects are completely immune to the effects of Alter Age. D-code: best of Mind or Mojo, Duration: Scene, Range: Contact. Limit: least of Mind or Mojo. `
},{
	name: 'Alter Appearance',
	cost: '(4+)',
	description: `you can change something’s outward appearance, but its Size remains relatively constant (within +/- 1 pip). This includes all sensory aspects of appearance (what it looks like, smells like etc.) in any sensory modes that you yourself possess. D-code may be added to Disguise, Performance or Stealth to overcome Perception or Intuition Skills to detect the Appearance Shift. Your D-code must overcome the Structure of non-sentient targets or the Will of involuntary sentient ones.
The new appearance confers no special Perks, Powerks or Skills associated with it, and to change to a new appearance, you must have seen it before. The GM may assign penalties to your D-code for appearances that are guessed at from description, or briefly seen, or never seen in person.
Suggested Focuses include Self-Only (can change your own appearance), Other-Only (can only change another’s appearance), by object/target (Humans Only, Cars etc.), by subject (into animals, into gold, into furniture etc.), Visual Appearance Only, Sound Only and so on. Changing into a single alternate appearance would be a third-degree Focus and function essentially like the Powerk “Alternative Form”. D-code: Mind or Mojo, Duration: Scene, Range: Contact. Limit: Arcane, Science, Stamina, Technology or Will. `
},{
	name: 'Alter Climate',
	cost: '(5+)',
	description: `you can alter the ambient temperature, moisture and barometric pressure around you, or make it colder or hotter by up to your static D-code. Refer to the Environmental Hazards section to determine these Exposure effects, your static D-code would either add or subtract from the current climate’s TN.
By making it gust, rain, snow or fog, as an Action Each Round, you may apply your D-code as a penalty to selected Skill rolls affected by the weather, to all subjects in your Area. Suggestions include Perception rolls, ranged attacks, Athletics, to reduce fire damage if raining/snowing and so on. Bonuses or penalties might be applied to Athletics/Gliding or Flight Velocity. 
Such penalties/bonuses apply equally to everyone in the Altered Climate Area, unless the Selective Powerk is also purchased. This would allow you to create zones of exclusion. You can divide your D-code among multiple different effects simultaneously. 
Beyond this, you may create suitable Powerk effects equal to the Amplitude of your Alter Climate as a Flex Powerk. Such effects only apply within your Area and must be consistent with the climate you’ve created. Suggestions include Push (wind blasts), X-Blast (lightning strikes), Obscure, Alter Friction/Slippery, Negate/Electronics (rain) and so on. All climate effects require GM approval, and last for the Scene unless otherwise stated in their descriptions. 
You may have as many different, simultaneous Altered Climate regions, up to your Amplitude. Characters with Alter Climate may oppose pre-existing climate conditions or counter the Alter Climate effects of another character.
Area: 100m, D-code: Mind or Mojo, Duration: Scene, Range: Self. Limit: Arcane, Science, Stamina, Tech or Will `
},{
	name: 'Alter Color',
	cost: '(1+)',
	description: `you can change the colors of objects within your Area. Unwilling targets resist with their Will against your D-code. The world is your canvas. Sacrificing a Hero Point makes the change permanent but can be reversed by your target by sacrificing one of their own. Once per Scene per Amp, double any roll that might benefit from this ability, such as Stealth or Art/Interior Decoration. Area: a few metres, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Art, Science, Stamina, Technology or Will. `
},{
	name: 'Alter Density',
	cost: '(6+)',
	description: `you can make things (including yourself) denser, or less dense (sparser), by up to your D-code in Size-scale. This affects mass, and physical integrity, but not area/volume. When overcoming unwilling targets, your D-code must overcome their Will. No roll is required for voluntary targets. For non-sentient objects, you must overcome their Structure with your D-code. 
Denser subjects add the D-code to their Size, Soak, to Brawl/Melee damage, and static Might. They reduce their inherent Velocity by their Density D-code as well as any reasonably affected Skills like Athletics, Dodge and Stealth. Add the D-code to any falling damage they receive.
Sparser (less dense) subjects subtract their static Scale from their Size. If less than half their previous, they are buoyant in water if not already so. If Size is less than 0, they begin to float upwards against gravity by a static Velocity equal to the number below 0. So, if your Size is reduced to -10, you start to rise at a Velocity of 3D+1 (approximately 100 metres/Round; see Scale Table). Sparser targets may resist this with an Action by pitting their Might against the static Velocity (they must hold on to something to keep from floating upwards).
Sparser subjects subtract their D-code from their Brawl/Melee damage, their static Might and Soak. At 0 static Might or Soak, they are simply too feeble to act, and are at risk of injury from the slightest trauma, being so brittle. They may add their D-code as a bonus to certain physical Actions that might benefit from being less dense; Athletics, Dodge, Stealth or anything else the GM deems appropriate, but up to no more than double their previous dice.
The Velocity of sparser subjects also increases by their D-code, to a maximum of double D.
First-degree Focuses might be either of Increasing or Decreasing density, or application to Self or Others. Area: Target/Self, D-code: least of Mind or Mojo, Duration: Scene, Range: Contact, Limit: Arcane, Science, Stamina, Technology or Will`
},{
	name: 'Alter Distance',
	cost: '(5+)',
	description: `you can increase or decrease spatial dimensions by a Distance Scale equal to the number of D in your D-code, creating giant chambers inside smaller ones, decreasing distances between points and so on. Any dimension in three-dimensional space can be altered in this way. A Hero Point can make such alterations permanent.
As an Action, you can add your D-code to any static defense for the Round to Warp away an attack. You can also use this offensively, with an Action you can change spatial relationships around targets (crushing them, causing them to fall great heights and so on) to cause them damage equal to your D-code. This requires an additional Action to warp space in addition to an Action for the attack itself. Alter Distance may act as a Flex Powerk for anything deemed reasonable by the GM (Mighty Velocity, Mighty Defense and so on). D-code: Best of Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Technology or Will`
},{
	name: 'Alter Friction',
	cost: '(4+)',
	description: `you can make something sticky or slippery. When sticky, two things in contact can only pull apart if your static D-code is overcome with a Brawn Skill roll or equivalent. When slippery, any movement on an affected surface requires an Athletics roll versus your D-code or fall prone, lose grip, slide in a random direction and so on.
Making an Area sticky means that anything traversing or in contact with it must resist your D-code with a Brawn roll or remain there. 
You can generate other suitable Powerk effects as a Flex Powerk of Power Point value equal to your Amplitude. Suggestions might include Deflection, Mighty Velocity, Mighty Soak, Snare, Wall Walking etc.
Each of Sticky or Slippery are considered first degree Focuses of Alter Friction, as would the application upon Self or Others. Area: Target/Self, D-code: Mind or Mojo, Duration: 1 Round, Range: Contact, Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Alter Gravity',
	cost: '(6+)',
	description: `you can alter the direction and intensity of gravity within a given area, even neutralizing it if you wish. You gain the Levitation Powerk at no cost and Alter Mass at the same Amplitude as your Alter Gravity, applicable to everything within your Area. You may reduce/increase any falling or Knockback damage within your Area by up to your D-code. 
As an Action, you may alter the vector of gravity in any direction you choose, essentially causing all un transfixed objects to “fall” in that direction while they are in your area, at a Velocity equal to your D-code. Targets in your Area get no resistance roll, they are automatically affected, but may resist with their own Alter Gravity D-code if they have it, or other gravity-defying modes of transportation. As an Action, you may apply your D-code as a penalty or bonus to certain Skill rolls that might be reasonably affected by your Altered Gravity, to anyone within your Area. Such applications are subject to GM approval. 
Alter Gravity lets you generate other suitable Powerk effects as a Flex Powerk, up to a Power Point value equal to your Amplitude. Examples include Gravity Blast, Push, Telekinesis, Wall Walking, Water Walking and so on. Area: 10m, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Alter Mass',
	cost: '(4+)',
	description: `you can make things (including yourself) heavier, or lighter, by up to your D-code in Size-scale. This includes mass but not area/volume, or physical integrity. When overcoming unwilling targets, your D-code must overcome their Will. No roll is required for voluntary targets. For non-sentient objects, you must overcome their Structure with your D-code.
Heavier subjects add their D-code to Size (just their weight really), and to Brawl/Melee damage, but not to their static Might (for Brawn rolls). Heavier targets suffer a penalty equal to their D-code to Stealth, Athletics, Brawl, Melee and Dodge, or any other physical Action that might be impeded by being heavier.
Heavier subjects take the Altered Mass D-code as damage each Round and can be crushed to death under their own weight. This gets added to any falling damage they experience while heavier. The D-code reduces their inherent Velocity by the same amount. If the static D-code exceeds their static Might, they cannot take any physical Actions until they make a successful Brawn roll against their new Size. This requires a whole Round.
Lighter subjects subtract the D-code from their Size. If less than half their previous, they are buoyant in water if not already so. If Size is less than 0, they begin to float upwards against gravity by a static Velocity equal to the number below 0. So, if your Size is reduced to -10, you start to rise at a Velocity of 3D+1 (approximately 100 metres/Round). Lightened targets may resist this with an Action by pitting their might against the static Velocity (they must hold on to something to keep from floating upwards).
Lighter subjects subtract the D-code from any Brawl or Melee damage they inflict. They may add the D-code as a bonus to certain physical Actions that might benefit from being lighter; Athletics, Dodge, or anything else the GM deems appropriate, but no more than double D in the affected Skill.
The Velocity of lighter subjects also increases by the D-code, again, only to a maximum of double D. 
First-degree Focuses might be either of Increasing or Decreasing Mass, or application to Self or Others. Area: Target/Self, D-code: least of Mind or Mojo, Duration: Scene, Range: Contact, Limit: Arcane, Science, Stamina, Technology or Will`
},{
	name: 'Alter Size',
	cost: '(5+)',
	description: `you can make things (including yourself) enlarge, or shrink, by up to your D-code in Size-scale. This includes both mass and area/volume proportionately. When overcoming unwilling targets, your D-code must overcome their Will. No roll is required for voluntary targets. For non-sentient objects, you must overcome their Structure with your D-code.
Enlarged subjects add the D-code to their Size, Soak, to their static Might for Brawn rolls, and to the damage they inflict. Their smaller opponents add that Scale bonus to their attack Skill against the enlarged subject, as well as to their Dodge. Larger targets may suffer a penalty from their increased Scale when using smaller Scale weapons and tools, and to things like Stealth and certain Athletics rolls.
Shrunk subjects subtract the D-code from their static Might. They reduce the damage they inflict upon larger Scale opponents by their Scale difference. Attackers must subtract the Scale difference from their attack rolls against shrunken subjects. Smaller Scale subjects may add their Scale difference to their Dodge, as well as their Athletics and Stealth against larger Scale opponents.
Focusing on shrinking or growing, are considered first-degree Focuses, as is application to either Self or Others. Area: Target/Self, D-code: least of Mind or Mojo, Duration: Scene, Range: Contact, Limit: Arcane, Science, Stamina, Technology or Will`
},{
	name: 'Alter Temperature',
	cost: '(4+)',
	description: `you cause an object or target to heat up or cool down over the course of a Round. At the end of each Round your D-code is applied as damage. Objects may melt or burst into flames, freeze or crack/burst, depending on their nature. You may target more than one object, but each additional object under your heat or cold effect subtracts -1D from your D-code unless part of an Area effect.
You may use the D-code to counter the D-code of effects that might be reasonably affected by heat or cold. Examples might be heat to counter cold attack or environmental damage, or cold to counter heat attacks or environmental damage. Other effects of intense heating and cooling may also benefit from the D-code bonus, at GM discretion. Freezing an engine may subtract D-code from a vehicle’s Velocity, or from a brittle object’s Durability to enable smashing it, and so on. Heating a metallic door may make it more difficult to open, heating a crack in a metal hull may allow you to weld it etc. Use your imagination here. 
Any effects that are Powerk-like may be generated as a Flex Powerk, up to a Power Point value equal to Alter Temperature’s Amplitude. Examples might include Negate, Slow, Snare, Alter Friction and so on.
Either Heating or Cooling are each considered first degree Focuses. Area: Target, D-code: Mind or Mojo, Duration: 1 Round, Range: Contact. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Alternative Form',
	cost: '(1)',
	description: `you can take on one single predetermined, completely different shape and appearance (of within +/-2 pips Size) as an Action. You can change back whenever you like. You have no additional special abilities in this form unless you buy them. Each Alternative Form must be bought separately, if you have multiple Alternative Forms, you can freely switch between them.`
},{
	name: 'Anatomical Separation',
	cost: '(2+)',
	description: `parts of you can separate and function under your control, within your Range. Each part of you has the same abilities as you (except further Anatomical Separation) and effectively function as little selves. Each segment is at least one Size-scale smaller than you and must apply the associated modifiers.
When injured body parts return to the main body, they impart their damage to you one injury level below their own, per Scale difference from your intact form. Destroyed segments create an appropriate Complication reflecting its deficit (One Arm, Lame, etc.). These can be replaced, requiring the expenditure of a Hero Point and an acceptable rationale.
Amplitude doesn’t necessarily reflect the number of segments possible, only a representative aggregate of what you can command and control at any given moment. Each Amp gives you one extra unpenalized Action per Round, provided the Action is performed by one of the separated anatomical segments. 
You can double the Skill roll of any Action that might benefit from multiple separated body parts working together, once per Scene per Amp. If perpetually separated you have the SuperFreak Complication, otherwise you have the Activate Complication. Range: 10m, Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Animation',
	cost: '(4+)',
	description: `you can cause inanimate objects to move around and obey you, even if that involves minimally deforming their shape, or temporarily granting them a semblance of sentience. The Size of your Animations cannot exceed your static D-code.
You can create Minions, or Vehicles (see Minions, and Mighty Vehicle) at an Amplitude equal to your Animation’s. Such Ani-Minions don’t need Mind or Mojo Attributes. These Ani-Minions are essentially marionettes under your control. Any Action they take counts as one of yours for the purposes of determining Action Penalties. 
If your Ani-Minion has a Mind Attribute it can follow instructions and act independently, as far as its intelligence allows. Having both a Mojo and Mind Attribute permits free will, and the Ani-Minion can take limited initiative, make plans etc. but can also be persuaded to act against you. Having a Mojo Attribute confers neither intelligence or will and is essentially a waste of Power Points.
Ani-Minions will not have abilities that aren’t compatible with their composition. So, Animated concrete slabs may be tough and strong, but they most likely will not be able to fly or shoot gouts of plasma.
You can use Animation to simulate other Powerks of equal Power Point value to the Amplitude of your Animation as a Flex Powerk. Such Powerks must be consistent with the nature of what is being Animated. Example, Animating a body of water into a tidal wave simulating the Push Powerk, or Shockwave (see their entries below). Animating the earth to form a protective wall around you (X-Construct) and so on.
By Spending a Hero Point you can make an Animation permanent. Once destroyed, it is gone forever as well as the Hero Point spent on it. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Technology or Will. `
},{
	name: 'AntCon',
	cost: '(6+)',
	description: `you can send yourself or others forward in time, once per Amp per Session. You may bring your static D-code in Size, forward in time with you. Unwilling targets must resist your D-code with their Will. Unlike travelling into the past, travelling into the future is only travelling into one possible future of an infinite number of possible futures. Thus, if you have the power to return to your present (see RetCon below), the subsequent future you visited may not come to pass in your timestream, since even foreknowledge may be enough to change it. To those left behind, the AntCon-er simply disappears and reappears later, at the preset future. The ramifications of such temporal gymnastics, and whether the same future exists when travelers return from there, I leave to you and your GM.
When arriving in the future, you arrive at the same spatial location as where you left. This assumes you will follow the Earth’s spin and trajectory. If not, the GM may impose fun Complications like embedding you deep in the molten core of the Earth or leave you behind in space somewhere in the path left by Earth’s orbit around the sun. Area: Self/Contact, D-code: Mind or Mojo, Range: (temporal) 1 Round, (spatial) contact. Limit: Arcane, Science, Stamina, Technology or Will. `
},{
	name: 'Area Effect',
	cost: '(1+)',
	description: `allows you to exert the effects of a Powerk (that doesn’t already have an Area) over an Area of 1.5m radius or “within reach”. Each Amp upscales this Area. Every target in the Area is affected by the Powerk equally. Area Effect must be purchased separately for each Powerk to which it applies. Some Powerks may not be appropriate, GMs approval is required before buying this Powerk. Limit: Arcane, Perception, Science, Stamina, Technology or Will.`
},{
	name: 'Armor',
	cost: '(1+)',
	description: `you wear, or are covered by, something that protects you against injury. It adds +1 to your Soak per Amp. Like other forms of armor (see Combat), it can be sacrificed if you choose, the Armor taking damage instead of you. You would apply the rolled damage to the Armor’s Structure instead of your Soak, its Structure being twice its Amplitude. Damage exceeding the Armor’s destruction is inflicted on the wearer.
Damaged Armor can be repaired in its own dedicated Scene. Destroyed Armor cannot be available until next Session, and only after a Scene dedicated to its reconstruction and expenditure of a Hero Point.
If the Armor has the Perk Indestructible Item, then it is never damaged or destroyed when used to take damage. Rather, it is dislodged, or deactivated so that a dedicated Action is required to readjust it. Until then, it affords no benefits.
Armor usually carries the Vulnerable Item Complication, unless it’s always on, then it will have the SuperFreak Complication. If not, then it must have the Activate Complication, and possibly Delay (because you must put it on). Its weight is negligible unless you deem it otherwise (which too could be a Complication).`
},{
	name: 'Asphyxiate',
	cost: '(3+)',
	description: `you can deprive your target of oxygen and induce a state of Asphyxiation upon them. After successfully hitting them they immediately begin to asphyxiate following the procedure described in the rules (see Other Conditions), except they must role their Stamina against your D-code instead of the escalating 1D per Round. Each Round thereafter 5 is added to the TN against them. Initial damage is Knockout. Once Comatose, subsequent damage is Injury.
Doesn’t work against beings that don’t require oxygen; aliens, robots, the undead etc.  Area: Target, D-code: best of Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: least of Mind or Mojo.`
},{
	name: 'Astral Projection',
	cost: '(4+)',
	description: `your psyche can leave your body and travel outside it, up to your Range, while your body remains behind in a Comatose state. Your psyche is Incorporeal and can become Invisible at will as the respective Powerks. You travel at the same Velocity you’d normally travel.
You bring with you all your normal sensory modalities and Skills, but any abilities that directly alter the physical universe are impossible. With GM permission, if you are able, you may use Telepathy to communicate, or Telekinesis or Compulsion upon another to affect the physical world, but you won’t be firing Energy Blasts or swinging haymakers while Incorporeal, unless it is against other Incorporeal entities. Unlike the Powerk Incorporeal, there is no option to become substantive unless you return to your physical form.
Injury to your comatose body causes you a D of Distraction penalty (like the Condition), each level of Injury another D of penalty. If the penalty exceeds your Will, you immediately return to your body. Should your body die you have until the end of your Duration to find a suitable vessel before the silvery umbilical cord connecting you to reality vanishes and you become one with the Cosmos. At your Duration’s end, you instantly return to your body (if still living). Duration: Scene, Range: 100m.`
},{
	name: 'Attraction',
	cost: '(3+)',
	description: `you can make things move towards another point, using magnetism, gravity or whatever. Everything in that Area moves towards a chosen point. If they are smaller than your D-code, they fly as if thrown by a Might equal to your D-code, at the Attraction point you pick (perhaps even inflicting damage to themselves or the Attraction point; see Throwing rules). Attracted targets may resist with their Might, targets that are the focal point of the Attraction can Dodge the Attracted objects, pitting their Dodge against your D-code. They will need to repeat this each Round they remain the Attraction Point. Area: 1D metres, D-code: best of Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: least of Mind or Mojo. 
Bestow (Perk, Power or Skill cost) you can grant someone else an ability. The subject must be voluntary or non-sentient. Each ability Bestowed is considered a separate Powerk and must be purchased separately. Having Bestow does not grant you the ability that is Bestowed, and, you can’t Bestow an ability upon yourself.
Bestowed Powerks with Limits respect those of the Bestower, not the recipient.
Inventions (see Invention below) don’t require Bestow to permit another user to benefit from that Invention. Duration: Scene, Range: Contact.`
},{
	name: 'Bind Psyche',
	cost: '(4+)',
	description: `you can trap any free-floating Psyche (ghosts, Astral Projections, freely roaming A.I.s etc.) into another host object (biological or artificial body, inanimate object etc.). If the host already has a psyche, its Will must be defeated by your D-code, to be suppressed for the Binding Duration. If the Bound psyche is involuntary, you must defeat its Will with your D-code also.
If the host vessel for the Bound psyche is destroyed, the psyche is released. Sacrificing a Hero Point makes the Binding permanent unless Exorcised (see below) or the vessel destroyed. D-code: Mind or Mojo, Duration: 1 Scene, Range: 10m.`
},{
	name: 'Block Senses',
	cost: '(5+)',
	description: `you may block another’s senses (vision, hearing, touch, taste, smell, magical scrying, ESP, direction sense, infra-red vision etc.). Add 15 to the TN, or subtract 5D to a Skill roll, for any task dependent on the Blocked sense. This includes static defenses. Target resists your D-code with either their Will or Stamina (your choice at purchase). Subsequent sensory blockade doesn’t stack (you can’t become more blind).  Blocking a single specific sensory modality would be considered a third-degree Focus, reducing base cost to 2+. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Body Weapon',
	cost: '(1+)',
	description: `part of your anatomy is a melee weapon; claws, horns, quills, crackling energy (or your X if you have one) around your fists or perhaps a glowing sword of magic that never leaves your hand. The weapon adds +1 pip per Amp to your Might in damage. You may use either Brawl or Melee Skills or their Specialties to attack. Weapons that are ranged attacks are best covered by X-Blast, where the X is whatever your weapon is (spit balls, corrosive mucus, fingernail clippings etc.). 
Your Body Weapon can be used to parry and can take damage instead of you if you miss your Parry (see Parry rules). Its Structure is equal to double its Power Point value. Damaged or Disabled Body Weapons “heal” as if they’re Wounded. Destroyed Body Weapons can return by spending a Hero Point and providing an adequate story-consistent rationale.
Body Weapon lets you freely Link other Powerks to it at no cost beyond that of the Linked Powerk. These are considered extra effects of the weapon. Suggestions might include Corrosive, Paralyze, Toxin, etc. Once per Session double a Skill roll related to your Body Weapon.
If your Body Weapon is always activated then you have the SuperFreak Complication, if not, you have the Activate Complication. D-code: +1 pip/Amp. Limit:  Arcane, Brawl (Skill or Specialization), Melee (Skill or Specialization), Science, Stamina, Technology or Will. `
},{
	name: 'Boost',
	cost: '(4+)',
	description: `you may temporarily increase the power of any Powerks, Perks, Skills, Specializations or Attributes by a Power Point value equal to the Amplitude of your Boost Powerk. Boosts of incomplete Amps cannot occur. The Boosted abilities must already be possessed by the subject. Inherent qualities may also be Boosted, at GM discretion (for example, gaining the Attractive Perk by Boosting someone’s beauty). You may Boost even beyond the listed Limits for Skills, Specializations, Perks and Powerks.
The Boost lasts your Duration, afterwards the affected powers are temporarily reduced by an equivalent Power Point value for the same amount of time. Incomplete Amps are considered non-functional, or if possible, Lesser (see Lesser Powerks above). Alternatively, after the Boost Duration, another ability is reduced for an equivalent time (for example, Might, or Moves). This must be specified at purchase. Attributes reduced to 0 or less result in a Comatose state (see Conditions) for the Duration of the Boost “crash”.
Thus, having 3 Amps of non-Focused Boost would permit you to increase any pre-existing ability by 3 Power Points for a single Round. Your subject would then suffer a Boost “crash” penalty of the same number of Power Points for the same Duration, once the Boost wore off. 
Focusing on individual powers (Powerk, Skill, Specialization, Perk) would be a third-degree Focus. Boosting Self or Others only might constitute a first-degree Focus. You cannot Boost the Boost Powerk itself.
Unwilling targets must resist your D-code to be Boosted by you. D-code: Mind or Mojo, Duration: 1 Round, Range: Contact. Limit: Arcane, Athletics, Science, Stamina, Technology or Will`
},{
	name: 'Bouncy',
	cost: '(3+)',
	description: `you are made of something springy and resilient. You can Leap (bounce), like the Powerk, at an equivalent Amplitude to your Bounciness. Against physical force, you have Immunity at an equal Amplitude. You also have the Perk Breakfall. Limit: Moves.`
},{
	name: 'Burrow',
	cost: '(1+)',
	description: `you can tunnel through solid matter by matching your D-code against the matter’s Durability. Your Velocity is a few metres per Round. You leave a tunnel or tract of loose matter behind you that is easily followed. Velocity: 1D m/Round, Limit: Arcane, Athletics, Science, Stamina, Technology or Will`
},{
	name: 'Chain Attack',
	cost: '(5)',
	description: `your attack will instantly affect the next nearest target in Range of the initial attack after you hit your first target, and will continue to propagate until it’s successfully avoided or it burns out. Each time it branches out, the initial attack roll is used to hit the next target, but its damage/effect D-code drops by 1D. Equidistant targets are struck simultaneously using the same D-code in damage/effect. Each subsequent attack occurs on the same Action and must be within Range of the initial attack.
Chain Attack must be purchased separately for each Powerk to which it is applied.   `
},{
	name: 'Commune',
	cost: '(3+)',
	description: `you can communicate telepathically with things that normally don’t speak (they may not even have intellect). Regardless you can interrogate their experiences, such as they are. A bloodhound can’t tell you what color a car was, but probably could tell you whether the driver was male or female, or what they ate, just by scent. A rock probably doesn’t “see” but probably experiences contact, perhaps size and number of passersby could be determined by Communing with the ground. 
I leave it up to you what sorts of information can be obtained from certain sources. Each Amp allows you one piece of information per Scene, or to double the Skill D on one appropriate roll per Scene. You can Focus on the sorts of things you Commune with (machinery, animals, plants etc.), or leave it entirely open. Commune doesn’t allow you to exert control, but you can try to convince your subjects using Influence Skills, if possible.
Certain Focuses occur frequently in the pages of comic books:
Range: Contact`
},{
	name: 'Compulsion',
	cost: '(5+)',
	description: `lets you force a being with self-awareness and intent (anything with a Mind and Mojo Attribute) to follow your commands for the Duration of your Compulsion. You must have a means of communicating with your target to issue commands. After successfully hitting your target, or communicating with them, they must make a Will roll against your Compulsion D-code or be forced to obey your commands for the Duration. Commands that are self-destructive or contrary to deeply held beliefs may be resisted with up to a +10 bonus. The target knows they are under someone else’s control and will know who the Compeller is, unless somehow hidden.
Alternately you may add your D-code directly to any Influence Skills used to Compel someone. 
Once per Duration, your target may burn a Hero Point to resist the Compulsion.
Several Focuses deserve mention because of the frequency with which they appear in the pages of comic books. Some common variations of Compulsion might include:
D-code: Mind or Mojo, Duration: Scene. Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will.`
},{

	name: 'Confusion',
	cost: '(4+)',
	description: `you can create a state of Stupefaction (as the Condition) in your target if you overcome their Will with your D-code. The target can get another resistance roll if they receive an injury or are re-oriented by another. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will`
},{
	name: 'Contagion',
	cost: '(5+)',
	description: `allows you to spread the effects of a Powerk to multiple individuals. Your initial target becomes the starting point, and if they fail their resistance against the Contagion’s effect, they become the index point for the Contagion. Any subsequent contact with the index, within the Area of the index target will cause spread to another potential target, who may also spread the effect of your Contagion to anyone within the Contagion’s Area of them, but only if they too fail their resistance against the initial Contagious effect.
To propagate, the Contagion’s effect must overcome each target’s resistance. The Contagion will continue to spread for its Duration, but the Duration of the effects it spreads can last longer depending on what the effects are. Each type of Contagion is a distinct Powerk and must be bought separately from other Contagions. The effects attached to the Contagion must be purchased along with it, but do not grant you any abilities beyond the Contagion itself. Thus, a Contagion/Toxin ability would not grant you the Toxin Powerk outside of the Contagion (they are effectively Entangled as the Complication).
If the effects of the Contagion have no D-code to resist, then it defaults to your Mind or Mojo. The Range refers to your distance from the first target of the Contagion.
Common examples of Contagion effects include Afflict, Asphyxiation, Confusion, Delusion, Hallucination, Paralyze, Toxin and so on, but many more are possible. Area: Contact, D-code: as Contagious effect (or your Mind or Mojo if none), Duration: Scene, Range: Contact. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Corrosive',
	cost: '(3+)',
	description: `your attack destroys matter in a manner similar to acids, caustics, digestive enzymes and solvents. At the end of the Round in which Corrosive hits its target, your target takes 1D damage per Amp. Each Round thereafter the damage is reapplied automatically at a cumulative -1D damage penalty per Round. Each subsequent hit resets the damage to full and the countdown begins anew. Multiple hits in the same Round delay the damage reduction countdown by one Round per hit. So, getting hit with a Corrosive attack three times in the same Round means the target will take the full Corrosive damage for three Rounds, and -1D damage on the fourth, -2D damage on the fifth and so on, until 0. If hit again, the damage begins anew at full strength, counting down by -1D each Round.
You may Focus by the type of matter your attack corrodes. You are assumed to be impervious to your own Corrosion. D-code: 1D, Range: Contact. Limit: Might, Mind or Mojo.`
},{
	name: 'Creation',
	cost: '(6+)',
	description: `you can make matter in whatever shape or form you wish. Powerk-like effects can be included, up to your Amplitude in Power Point value, as a Flex Powerk. Your Creation must fit within your Area and have a Structure of no greater than your static D-code.
Sentient Creations are not under your control and may even attack you if you’re not careful. GM’s call. These are best described using the Minion Perk at the same Amplitude as your Creation Powerk, with the Unintended Consequences Complication. Non-sentient Creations can function like marionettes under your control, and every Action they make is considered one of yours for the purposes of calculating multiple Action penalties. See the Animation Powerk above for more information on this.
By expending a Hero Point, you can make a Creation permanent, but its destruction is also permanent, as is the Hero Point lost to make it. Area: 10m, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Dark Vision',
	cost: '(1+)',
	description: `you can see in the dark as far as you can see in the light. Once per Scene per Amp you may double the Skill roll on anything that would benefit from seeing in the dark. If you cannot see in complete darkness, only “low light” vision, consider that a Complication. Range: normal human vision, or yours, whichever is better.  `
},{
	name: 'Deflection',
	cost: '(5+)',
	description: `you can redirect, up to your static D-code, per Round, damage or offensive effects, back to its source or at another target using the same “to hit” roll used against you, with the same Range and Area characteristics. This requires no Action on your part. Any remaining damage/effect after subtracting your static D-code is matched against your Soak or appropriate resistance. You may split up your Deflection D-code between multiple attacks if you wish but the total Deflected cannot exceed your static D-code per Round. Focusing on types of attacks reduces its base cost.`
},{
	name: 'Reflection',
	cost: '(4+)',
	description: `is considered a first-degree Focus of Deflection, allowing you to redirect the effects of attacks only at their source, using the same “to hit” roll used against you, with the same Range and Area characteristics. Otherwise it follows the same rules as Deflection.
D-code: Mind or Mojo. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Delusion',
	cost: '(5+)',
	description: `you can alter a being’s understanding of the world. A being is considered anything with consciousness and intent (essentially anything with a Mind or Mind and Mojo Attribute). Alteration of your target’s world view doesn’t change what they perceive, only how they interpret it. For example, while you may not command an enemy minion to attack their master, you may alter their perception of their master from “friend” to “enemy”. Likewise, you cannot Delude your target into believing there is a gorilla in the room when there isn’t one; that would be an Illusion or a Hallucination. “These are not the droids you’re looking for…” and so on, would be considered a Delusion.
Delusions require targeting, then overcoming the target’s Will with your Delusion D-code. Delusions that are self-destructive or contrary to firmly held beliefs add up to +10 to their resistance. Once a Delusion has been planted, you may add your Delusion’s D-code to any Influence attempts that are consistent with that Delusion. With GM permission, this bonus may also extend to other mind-altering Perks or Powerks, perhaps making a Compulsion or Illusion more believable.
Delusion doesn’t make you Invisible, only suggests to your target that you are not there and would add your D-code to any Stealth rolls you make.
Disturbing or frightening Delusions can be used to inflict psychological Trauma on your target, using your D-code as the TN for them to overcome with their Will/Courage/Sanity (see Insanity and Trauma). D-code: Mind or Mojo, Duration: Scene, Range: 10m, Limit: Arcane, Influence, Science, Stamina, Tech or Will`
},{
	name: 'Detection',
	cost: '(4+)',
	description: `you can concentrate on an object, person or concept (enemy, magic, danger, deception/truth, life-forms, your car keys etc.) and Detect it within your Area. Your Area acts as a perimeter, alerting you of your Detection subject’s presence within it, but not its location. You may add your Detection D-code to any attempts to actually locate the object in your Area, using Perception Skill and/or using Powerks like Far-Sensing or Mighty Senses.
The difficulty TN for locating within your Detection Area is the static D-code of the Area Scale searched, plus any modifiers for terrain and concealment (up to 10, for total cover, like in ranged combat). If the subject is actively hiding, add their Stealth roll to the TN. Once an object has been located it may be targeted for attack, but each subsequent attack requires another roll (as a separate Action) if the target is mobile. Area: 10m, D-code: Mind or Mojo`
},{
	name: 'Dimension Portal',
	cost: '(5+)',
	description: `you can create a doorway into another dimension, any dimension or alternate reality, that you are aware of. Dimension Portal cannot substitute for Teleportation or TelePortal (see Dimension Shift) because you will invariably return to your exit locus from the dimension you left. Thus, skipping through one dimension only brings you back to where you left it, or alternately, to a random location of the GM’s choosing (heh, heh, heh).
The Portal is a few metres in Area and will allow passage to anything that physically fits through it. A Portal can be used defensively (see TelePortal below) but cannot be used to redirect attacks within the same dimension, only into the destination dimension. 
Closing an opened Portal on someone part way through inflicts your D-code in damage, and you get to decide which side of the Portal the remainder goes if you overcome your target’s Will (or Size for non-sentient objects) with your D-code. Such an attack requires two Actions to pull off (one to Target, another to open the Portal). Targets without a means of returning are trapped in the dimension you send them to.
Another way to use Dimension Portal offensively is to open a portal to a dimension with a damaging atmosphere. Such a Portal opened on your target can inflict your D-code in damage but requires two Actions to pull off (one to Target, another to open the Portal).
Portals to a specific Dimension only (and back presumably) would be considered a 3rd degree Focus.
Area: 1D m, D-code: best of Mind or Mojo, Duration: 1 Round, Range: Contact. Limit: least of Mind or Mojo.`
},{
	name: 'Dimension Shift',
	cost: '(5+)',
	description: `you can send things into any dimension or alternate reality that you are aware of and bring them back. Dimension Shift to a specific Dimension is considered a 3rd degree Focus. Dimension Shift cannot be used as an alternative to Teleportation or TelePortal since you will always return to your exit point from the previous dimension.
Like Teleportation you can Shift things out of, or into, other objects, inflicting your D-code in damage to them, using an extra Action with each attack. Non-inherent forms of protection like Armor or Shields do not add to Soak/Structure against a Dimension Shift attack.
The amount of Size you can Shift is equal to your static D-code. Involuntary targets resist with their Will, objects with their Size. Things without a means of returning are stuck in the dimension you send them. D-code: best if Mind or Mojo, Range: 10m. Limit: least of Mind or Mojo.`
},{
	name: 'Dimensional Summons',
	cost: '(5+)',
	description: `you may pull something from another realm of existence that you are familiar with, to wherever you are (or somewhere within your Range). The item’s Size may not exceed your static D-code. If the item has a Will it may resist your Summons by overcoming your D-code with it. 
Once per Amp per Scene, you may Summon Minions (Demons, Spirits, ancestors etc.) of equal Amplitude as your Dimensional Summons Powerk. These carry the Unintended Consequences Complication, because they may or may not do what you tell them. 
You may Summon objects that grant you power effects of equal Power Point value as your Dimensional Summons Amplitude, as a Flex Powerk.
Specific items you are not personally familiar with may add up to 10 to your Summoning TN to bring them over, or may not be Summoned by you at all, at GM discretion. D-code: Mind or Mojo, Range: Contact. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Diminish',
	cost: '(5+)',
	description: `An attack that reduces a target’s Perk, Powerk or Skills by overcoming their Will with your D-code. You can temporarily remove an amount of Power Points equal to the Amplitude of your Diminish. Additional Successes on your Targeting roll, or against a target’s resistance can add +1 to the number of Power Points Diminished. 
You may Diminish Amps of Perks or Powerks incompletely, with GM permission, leaving a Lesser form of that Powerk behind. If no Lesser form is possible the Powerk ceases to work. Diminish may also be used to remove mundane elements of a character such as their basic Attributes, Perks and Skills. Attribute pips cost 2 Power Points each. Attributes reduced to 0 or less result in a Comatose state.
Unlike Negate, there is no upper limit to Diminish, and repeated hits will deplete abilities until they are gone. Diminish may Focus, a specific Powerk, Perk or Skill would constitute a third-degree Focus. D-code: Mind or Mojo, Duration: Round, Range: Contact. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Don’t Age',
	cost: '(1)',
	description: `you don’t get any older than you are now, impervious to the effects of time.`
},{
	name: 'Don’t Breathe',
	cost: '(1)',
	description: `you don’t need to breathe.`
},{
	name: 'Don’t Drink',
	cost: '(1)',
	description: `you require no liquid intake to survive.`
},{
	name: 'Don’t Eat',
	cost: '(1)',
	description: `you require no sustenance to survive.`
},{
	name: 'Don’t Sleep',
	cost: '(1)',
	description: `you require no sleep.`
},{
	name: 'Duplicate Psyche',
	cost: '(4+)',
	description: `you can copy your own or another’s consciousness/soul and store it in an inert medium. The original Psyche is not affected by this. Each Amp doubles the previous number of possible copies, any copies beyond this fail. Unwilling original Psyches must have their Will overcome by your D-code to be Duplicated.
Copies possess all the knowledge, memories, Mind and Mojo Attributes, associated with that Psyche, up until that point in time. All Skills, Perks and Powerks attributable to the Psyche are copied as well, except Duplicate Psyche. 
The Duplicated Psyche is not accessible until Transferred (see Transfer Psyche) into a suitable form. Psychic copies are highly unstable and degrade rapidly ( over a Duration). Spending a Hero Point makes a single copy permanent. Involuntary targets must resist your D-code with their Will. D-code: Mind or Mojo, Duration: Scene, Range: Contact.`
},{
	name: 'Duplication',
	cost: '(6+)',
	description: `this Powerk lets you recreate an existing object or person. The Size of the object Duplicated must be less than your static D-code and must fit within your Area. Any Powerks, Perks, Skills/Specializations are also Duplicated, except for Duplication. Each additional Amp doubles the number of copies you can make with each use of Duplication. You may use Duplication once per Session per Amp. Duplicates with their own freewill may not obey you, or even like you.
A single Duplicate can be made permanent by expending a Hero Point, destroyed Duplicates are lost as is the Hero Point. Anyone who does not wish to be Duplicated may resist using either Will or Stamina against your D-Code. A common Focus of Duplication is the ability to Duplicate oneself only, or Clone.`
},{
	name: 'Clone',
	cost: '(5+)',
	description: `you can make one or more exact copies of yourself, with all your current Attributes, Perks, Powerks and Skills/Specialties, minus the Clone Powerk. In all other respects, Clone is identical to Duplicate.
By spending a Hero Point you can make Clones permanent. Permanent Clones may not necessarily obey you, you decide what type of relationship you have with your selves, Complications abound (Evil/Superior Twin anyone?). Permanent Clones who are killed don’t come back, neither does the Hero Point used to make them.
Area: 1D metres, D-code: Mind or Mojo, Duration: Scene, Range: Contact. Limit: Arcane, Science, Stamina, Technology, Will.`
},{
	name: 'Echinate',
	cost: '(1+)',
	description: `you are covered in spikes, barbs, serrated scales or something else that inflicts physical trauma and creates a physical barrier to close contact. When someone or something Brawls or collides with you or otherwise entangles you, they must endure your Might plus your Echinate Amplitude in damage, once per Round. You may freely Link any appropriate Powerk with your Echinacity (Toxin, Paralyze etc.). 
Alternatively, your Echinate might not be physical in nature, but energy, psychic, magical etc. In that case you may choose to inflict damage against Will or Stamina instead or inflict some other effect of equal Power Point value.
If you’re always Echinate, take the SuperFreak complication, otherwise it needs the Activate Complication.  D-code: +1/Amp, Limit: Arcane, Brawl, Melee, Science, Stamina, Technology or Will.`
},{
	name: 'Emotion',
	cost: '(5+)',
	description: `you can alter a being’s emotional state by overcoming their Will with your D-code. Each Success creates a Distracted condition in the target (see Conditions). If interacting directly with your target, you may add your Emotion D-code to any Mojo Skills used by you or anyone else to impose a desired emotion or create a Distracted state using that Skill.
Extremely negative emotional states can be used, with GM permission, to inflict Trauma on a target using your D-code (-10) as the TN against their Will/Courage/Sanity (see Insanity and Trauma).
Some Focuses are so frequent in comic books that they deserve mention:`
},{
	name: 'Empathic Healing',
	cost: '(1)',
	description: `you can heal the wounds of others by taking the injury upon yourself. You must still heal yourself or recover from those wounds normally. Range: Contact`
},{
	name: 'Empathy',
	cost: '(1+)',
	description: `you are attuned to the emotional states of your subjects. Double any roll that would benefit from being emotionally attuned to your subject, once per Scene per Amp, this includes Skill rolls for Influence, Intuition and the like. Targets can try to resist your Empathy (if they are aware of it) by pitting their Will or Deception against your D-code. D-code: Mind or Mojo, Range: 10m.`
},{
	name: 'ESP',
	cost: '(3+)',
	description: `you can read minds. As an Action, you must roll your D-code versus your target’s Will. Each Success yields one piece of information, or answers one specific question truthfully (or as the target understands it). This involves surface thoughts first, then deeper or even subconscious thoughts with higher Success levels. Five levels of Success should allow you to access even thoughts the target didn’t know about, such as suppressed memories. 
As an Action, you may read an opponent’s mind which allows you to anticipate their Actions for a Round, allowing you to add your D-code to your combat Skill rolls against them in combat, and your static defenses.
For the purposes of game play, anything with a Mind Attribute has a Mind to read. The target will feel “invaded” by an ESP application on them, unless the Subtle Perk is purchased alongside.
Focus on biological minds is a 1st degree Focus, on Human minds only, probably 2nd degree. D-code: Mind or Mojo, Range: 10m.`
},{
	name: 'Exorcism',
	cost: '(3+)',
	description: `you can expel spirits or invading psyches from people or objects and remove any domination or control by them. The target “spirit” must resist your D-code with the D-code of the Powerk used or their Will (whichever is greater) or be expelled. You cannot expel a spirit from its inherent vessel (what it was born/created in). D-code: Mind or Mojo, Range: Contact`
},{
	name: 'Exotic Environment',
	cost: '(1)',
	description: `you are adapted to survive in an environment not compatible with human survival, and not covered by another Perk or Powerk. This might be an alternative atmosphere (methane, helium etc.) or dangerous ambient radiation. It might be a difficult region on the Earth (the Arctic, Death Valley etc.) Regardless, you automatically pass any environment related resistances within those, or similar regions. You have a single Amp of Immunity against attacks based on those environmental forces (eg; your Soak against Cold Blast if you’re Arctic and so on). Each type of environment is its own Powerk. `
},{
	name: 'Explosion',
	cost: '(5+)',
	description: `you can cause explosions of non-specific energy, or your X if you have one, doing 4D damage at the point selected, following the rules for Explosives. You can delay the blast by upscaling Duration, allowing you to set “timed” Explosions. You can cause the Explosion to occur farther away by upscaling Range, but this requires you to “hit” the target (exploding playing cards mon cheri?). Targets caught in the blast subtract the static Area Scale of the Explosion from any permissible static defenses. You are never Injured by your own explosions, unless you take that as a Complication. Area: See Explosives rules, D-code: 4D, Duration: Instant, Range: Contact. Limit: Might, Mind or Mojo.`
},{
	name: 'Extra Limbs',
	cost: '(2+)',
	description: `you have an extra appendage(s) that you can do stuff with. It might be arms, legs, a tail, prehensile nose-hair and so on. Each Amp does not necessarily represent a single additional appendage, only what it (they) can do for you in aggregate.
Each Amp gives you one extra unpenalized Action per Round, provided that the Extra Limb(s) is engaged in one of your Actions. Once per Session per Amp, you may double the dice of one roll that might reasonably benefit from having additional dexterous members. Constantly available Extra Limbs has the SuperFreak Complication, otherwise they need to be Activated. Range: Contact. Limit: Moves.`
},{
	name: 'Extra Power Stunt',
	cost: '(1+)',
	description: `allows you to perform a Power Stunt, with any Powerks you possess, without expending a Hero Point, once per Session per Amp. Limit: Mind or Mojo`
},{
	name: 'Far-Sensing',
	cost: '(3+)',
	description: `you can throw your senses to another place within your Range. You cannot simultaneously sense the far location and your own, so you’ll be unaware of your surroundings while using Far-Sense. Range: 100m `
},{
	name: 'Flat',
	cost: '(3)',
	description: `you are either two-dimensional (literally) or very thin in a single dimension. From a certain angle, you are nearly invisible. As an Action, you may double a Dodge by turning your flat side towards an attack. Once per Scene you may double any Stealth rolls where your Flatness becomes an advantage. You can pass through any solid object that has a large enough gap in it to accommodate your girth or isn’t air/watertight. If you are always Flat you have the SuperFreak Complication, otherwise you have the Activation Complication.`
},{
	name: 'Flight',
	cost: '(4+)',
	description: `you can fly at 10’s of metres per Round (Human running speed, Velocity of +2D). You can carry anything you would normally be able to lift on the ground. Once per Session per Amp double the Skill dice of any roll where Flight might be an advantage (such as Dodging in aerial combat and so on). Velocity: 1Dx10m/Round (+2D). Limit: Arcane, Athletics, Pilot, Science, Stamina, Science, Tech or Will.`
},{
	name: 'Fluke',
	cost: '(2+)',
	description: `you have outrageous luck. Each Session you have a number of phantom Hero Points equal to your Amplitude, that can only be used to increase rolls, reduce injuries (“just a flesh wound”) or to describe fortunate happenstances in your environment that assist you in some unforeseen way. These may be used on anybody within your Range. Each use of this Powerk requires some narration, by you, along with GM approval, as to how this lucky event came to pass. Unused Points are lost at Session’s end. Like Hero Points, no more than three may be used at any one time. Range: 10m, Limit: Arcane, Intuition, Science, Stamina, Tech or Will.`
},{
	name: 'Force Field',
	cost: '(5+)',
	description: `forms an opaque or translucent (chosen at purchase) field of ablative protection enveloping you or others, equal to your D-code. Invisible Force Fields require the Subtle Perk. The Field protects you against every kind of harmful force, even those not inflicting actual “damage”. Against physical damage it behaves like a physical object with a Structure equal to its static D-code. Against other kinds of attacks, it ablates in the same manner, treating the resisted D-code of the attack as “damage” against the Force Field. Damage or effect exceeding the Force Field’s destruction is inflicted on the object surrounded by the Force Field.
You can use Force Field offensively, slamming opponents or trapping them. A Force Field inflicts its D-code in damage but takes the same amount of damage against itself. On a Complication, it is destroyed. Thus, your Force Field doesn’t make the best weapon as it very rapidly breaks apart. 
You may deploy as many Force Fields as your Amplitude per Scene. 
The Field takes on any shape you want but cannot be used to make anything more complicated than blobs or polygons. You can trap atmosphere in a Force “bubble” that can sustain its human occupants for a Duration Scale parallel to the bubble’s Area Scale plus two. Thus, a bubble of Contact/Self Area would sustain you for one Round (see Scale Table). 
Force Fields can be Focused against types of opponents and attacks, such as “enemies” or “demons”, or “fast moving objects”, “energy” or “sharp edges” and so on. 
It’s assumed that you can attack through your own Force Field, but not being able to do so might be an interesting Complication. If your Force Field is permanent take the SuperFreak Complication, otherwise it requires Activation. Area: Self/Contact, D-code: best of Mind or Mojo, Duration: Scene, Range: Self/Contact. Limit: least of Mind or Mojo.`
},{
	name: 'Force Wall',
	cost: '(4+)',
	description: `you can create an opaque or translucent (chosen at purchase) barrier of ablative protection in any one of six cardinal directions; front, back, top, bottom, left and right. Invisible Force Walls require the Subtle Perk. It has a Structure equal to your static D-code. Physical damage matches against it, potentially damaging or destroying it. The D-code from non-physical damage/effects attacks also matches against the Force Wall, such non-physical damage ablates the Force Wall in the same way as physical damage. Damage in excess the Force Wall’s destruction is inflicted on anything behind the Force Wall.
You can use Force Wall offensively, slamming opponents or trapping them. A Force Wall inflicts its D-code in damage but takes the same amount of damage against itself. On a Complication, it is destroyed. Thus, your Force Wall doesn’t make the best weapon as it very rapidly breaks apart. 
You may create as many Force Walls per Scene as your Amplitude. 
You can change your Force Wall’s facing as an Action. It can act as complete cover if large enough to cover an entire facing, adding +15 if opaque, +10 if translucent, to any of your static defenses (see Combat). Even if hit, you may opt to sacrifice the Force Wall, inflicting the damage against it instead of you, against any attack from the direction it’s facing, just like a shield or armor (see Combat).
Focusing Force Wall against certain kinds of attack reduces the base cost. It’s assumed that you may attack through your Force Wall unless you’ve taken a Complication otherwise. If it’s always on you have the SuperFreak Complication, otherwise it requires Activation. Area: Contact/Self, D-code: best of Mind or Mojo, Duration: Scene, Range: Self/Contact. Limit: least of Mind or Mojo.`
},{
	name: 'Forg-editing',
	cost: '(4+)',
	description: `you can erase or alter a target’s memories for your Duration. Spending a Hero Point makes this permanent. Roll your D-code against their Will, each Success allows you to alter or remove one Scene, event, fact or item, or all memories of a period equal to your Duration. Five Successes can turn the target into a complete amnesiac for the Duration.
Altering or implanting memories functions like the Powerk Delusion, except the target gets a +10 bonus to resist.
Each Success also lets you remove a Skill, or Specialization or Perk/Powerk. The target temporarily forgets the ability. However, any time the target receives a reminder of Skills or powers Forg-edited, they may make another roll to resist your D-code. May be used up to your Amplitude times per Scene. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'FTL',
	cost: '(3+)',
	description: `you can travel faster than light-speed (a Velocity of 18D), but you must be free of any major gravity wells (ie; already in space, not on a planet or even in orbit). Each Amp upscales your Velocity by one. You can take with you whatever you could normally carry. Limit: Mind or Mojo.
Gadgetry (as Power Set) this is a catch-all for those abilities like utility belts, trick arrows, cybernetic upgrades and so on, that always seem to be available to the Hero when they need them. They tend to be technological in nature but don’t have to be. Discuss your concept with your GM to make sure they work and fit in with the campaign. Your Limiting Skill could be Science, Tech, or Trades.`
},{
	name: 'Gestalt',
	cost: '(5+)',
	description: `you can combine with other beings to form a hybrid of all. You will have all the best Attributes, Perks, Powerks and Skills of the lot of you, as well as each of their Complications. You can communicate telepathically with your Gestaltees, but you can’t access their memories unless you overcome their Will with your D-code. You can control the Gestalt only if you can overcome each member’s Will with your D-code. Involuntary members must resist your D-code with their Will. They may hijack the Gestalt once per Round if their Will beats your D-code. But only you may terminate the Gestalt. Each Round you may regain control as an Action by beating their Will with your D-code.
Injury sustained while Gestalted is shared by all participants at the end of the Gestalt at one Injury level lower than inflicted. Death however, results in the automatic dissolution of the Gestalt, with all members Mortally Wounded. 
You can Gestalt with as many subjects/targets as your Amplitude. All members of a Gestalt can Support each other with any Powerks, Perks or Skill/Specialization rolls. D-code: Mind or Mojo, Duration: 1 Round, Range: Contact.`
},{
	name: 'Gliding',
	cost: '(2+)',
	description: `you can soar along wind currents (or some other medium such as magnetic fields or solar winds) at a Velocity of 10’s of metres per Round (+2D). You continuously lose altitude at a rate of 10m per Round though. You can regain altitude by catching thermal/magnetic/solar updrafts on a successful Athletics/Gliding or Flying roll against a TN of 10 (or more depending on circumstances). Each Success gains you another 10m of elevation. You automatically have the Parachute Powerk at the same Amplitude. 
As an Action, you can dive to upscale your Velocity for one Round. You cannot Glide if your Gliding Medium isn’t present (ie; in the vacuum of space if you are an air glider). Velocity: 1Dx10 m/Round, Limit: Moves.`
},{
	name: 'Hallucination',
	cost: '(5+)',
	description: `creates a perception in the mind of the target that affects all sensory modalities that the target possesses. The target believes the Hallucination if they fail to resist your Hallucination D-code with their Will. Hallucinations can inflict damage as Knock-Out against the target equal to your Hallucination D-code. The Hallucination lasts one Round (Knock-Out effects may last longer), starting Range is up to 10m. Hallucinations can also be used to create Trauma or Insanity in your target. Your D-code minus 10 becomes the TN for the target to resist with their Will/Courage/Sanity roll (see Insanity and Trauma).
Hallucination doesn’t make you Invisible. It can cover you up or change your appearance in the mind of your target, adding your D-code to any Stealth or Influence attempts. As an Action, you may add your D-code to your passive defenses against anyone who has failed to resist you. Useable up to your Amplitude times per Scene. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will`
},{
	name: 'Heal',
	cost: '(1+)',
	description: `once per Session you can reduce someone’s Injury level by one step, but not from death. Range: Contact`
},{
	name: 'Hex',
	cost: '(2+)',
	description: `you can cause unlucky things to happen to others. Each Session you get an “anti-Hero Point” per Amp that you can use to lower someone else’s rolls by 6, make an Injury one step worse, or have something go wrong in their environment that is disadvantageous to them. You must first target them with your Hex, but there is no resistance roll. Such misfortunes must be adequately described by you to your GMs satisfaction to be effective. Unused Points do not carry over to the next Session and are lost at Session’s end. Like Hero Points, no more than three may be applied at any one time. Range: 10m Limit: Arcane, Intuition, Science, Stamina, Tech or Will.`
},{
	name: 'Hijack Senses',
	cost: '(2+)',
	description: `you can perceive through the senses of another being. You must overcome their Will with your D-code if they’re involuntary. You have all the other’s sensory modalities available to you, and any related limitations. You cannot read their minds while Hijacking them unless you also possess ESP. The target will sense something wrong and know that they are hijacked and know who the hijacker is, unless you also have the Subtle Powerk Perk. D-code: Mind or Mojo, Duration: 1 Round, Range: 100m. `
},{
	name: 'Illuminate',
	cost: '(1+)',
	description: `you can create light that lasts for as long as you want. It allows reading in a 10m area or if focused in one direction it can illuminate 1D X 10’s of metres further. It can be seen 10 kilometres away in clear, dark conditions. Once per Scene per Amp you can flare it causing all within 10m to make a Stamina roll against your D-code or be Blinded (as the Condition) in the human visual spectrum for 1D Rounds. Further Failures upscales this Duration. Area: see description, D-code: Mind or Mojo, Duration: indefinite, Range: see description. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Illusion',
	cost: '(5+)',
	description: `projects a multisensory image (using only the senses possessed by the creator) which fits within an Area of a few metres at a Range of 10m. Viewers may resist with their Perception Skill against your Illusion’s D-code. For each sense the viewer possesses that the Illusionist doesn’t, add +5 to their resistance. Believed Illusions can inflict Knock-Out damage equal to your D-code. Illusions can also be used to create Trauma or Insanity in your target. Your D-code minus 10 becomes the TN for the target to resist with their Will/Courage/Sanity roll (see Insanity and Trauma).
An Illusion cannot make something Invisible, only cover it up or make it look like something else, adding your D-code to their Stealth or Influence (for disguises and impersonation attempts). As an Action, you may add your D-code to your passive defenses against affected individuals. You can create as many Illusions per Scene as your Amplitude. Area: a few metres, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will`
},{
	name: 'Illusionary Duplicates',
	cost: '(2+)',
	description: `a Focus of Illusion, you can create the illusion that there are more of something than truly exists, once per Amp per Scene. If the target’s Perception doesn’t overcome your D-code, they believe that the Duplicate is the original, and attacks it, steals it, or whatever the target’s intention is. This adds your static D-code to the static defenses if they attack you or becomes the TN against their Perception to choose the original amongst the Duplicates.
The Illusionary Duplicate possesses any of the sensory aspects that the creator possesses, thus the illusion will not fool someone with Infra-Vision unless the creator also has Infra-Vision. For each sense the viewer possesses that the Illusionist doesn’t, add +5 to their resistance. Like Illusions, a Duplicate can cause Knock-Out Damage equal to its D-code. The Duplicates must fit into the Illusion’s Area. Area: a few metres, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will.`
},{
	name: 'Immortal',
	cost: '(2+)',
	description: `it’s not that you can’t die or be killed, it’s just that for whatever reason (you’re a Deity, Alien physiology, Mutation etc.) it’s very unlikely. Thus, you’ve probably been around for a long time and have a lot of experience under your belt. 
Each Amp of Immortal can be used in one of the following ways, once per Session per Amp; double the Skill dice of any roll reflecting your vast experience (like Backstory, you’ve been there, done that), buy one Power Point of Perk/Powerk or Skill/Specialization for the Session reflective of your Immortality, or grant you Immunity to one of the forces that plague the mortal (Disease, Poison, physical trauma etc.). Also, it’s assumed that you Don’t Age, like the Powerk. Limit: Mojo.`
},{
	name: 'Immunity',
	cost: '(4+)',
	description: `you may double any inherent resistance roll (including Soak but not armor) to the subject of your Immunity once per Scene per Amp. Unspecified Immunity (Pan-Immunity) gives you Immunity to any source of harm, once per Scene per Amp. Third degree Focus in Immunity might include Immunity to specific Powerks, or specific physical attacks (fire, light, piercing, blunt force and so on). Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Incorporeal',
	cost: '(5)',
	description: `you cannot be harmed by matter, physical force or energy. You cannot exert physical force or energy directly against your environment. You may still apply or be affected by incorporeal forces such as psionics and magic that exert no direct effect on the physical world. At GM discretion, abilities like Push or Telekinesis might still be available to you. You are still visible. You may pass through any solid or energy barrier. Without a separate means of propulsion such as Flying or Levitation you cannot travel.  
You can solidify, attack and then become Incorporeal as an Action each, requiring three Actions. This makes you subject to physical forces again and anyone who either shares your Initiative rank, has declared a wait Action to catch you, or who can attack before you revert, can harm you while in solid form.
The Selective Powerk taken alongside Incorporeal will permit you to exclude certain parts of your anatomy (your fists, the soles of your feet and so on). These parts can be targeted and harmed normally, and subject you to injury.
If permanent you have the SuperFreak Complication, otherwise you have the Activation Complication.`
},{
	name: 'Infra-Vision',
	cost: '(1+)',
	description: `you can see in the infrared or heat spectrum. Once per Scene per Amp you may double the Skill D on any roll that would benefit from seeing in IR. Range: 100m or as far as you can normally see, whichever is better.`
},{
	name: 'Insanity',
	cost: '(4+)',
	description: `your attack drives your targets insane by inflicting Trauma against them equal to your D-code (see Insanity and Trauma). Focus may take the form of specified targets or types of Insanities inflicted.  D-code: 4D, Range: 10m, Duration: as per Insanity and Trauma rules. Limit: Arcane, Influence, Science, Stamina, Tech or Will`
},{
	name: 'Insensible',
	cost: '(1)',
	description: `you cannot be detected in a single, specified, sensory modality; sound, smell, touch, taste, sonar, radar, magical scrying, and so on, except for regular vision. Targets are essentially “blind” to you in those modalities as per the condition, adding +15 to any TNs requiring those senses to find, locate, identify or target you. For the normal human visual spectrum, the Powerk “Invisible” is required (see Invisible), not Insensible.
If permanent you have the SuperFreak Complication, otherwise you must take the Activate Complication.`
},{
	name: 'Intangible',
	cost: '(5)',
	description: `you cannot be harmed by matter or physical force, and you may not apply direct physical force upon your environment. You are still affected by, and can exert, intangible energy such as heat, electricity, radiation etc. You can pass through solid barriers but are tangible to energy barriers. Without a separate means of propulsion like Flight or Levitate, you cannot move around while Intangible. 
You can solidify, attack and then become Intangible as an Action each, requiring three Actions. This makes you subject to physical forces again and anyone who either shares your Initiative rank or has declared a wait Action to catch you, or who attacks before you can revert, can harm you normally while in solid form.
The Selective Powerk taken alongside Intangible will permit you to exclude certain parts of your anatomy (your fists, the soles of your feet and so on). These parts can be targeted and harmed normally, and subject you to injury.
If your Intangibility is always on you have the SuperFreak Complication, otherwise you have the Activation Complication.`
},{
	name: 'Invention',
	cost: '(1+)',
	description: `isn’t a Powerk so much as “Powerk-potential”. Each Amp of Invention adds one Power Point to a fund of possible Invention Power Points you can use each Session on an Invention of your design. There is no limit on the kinds of Perks, Powerks or Skills granted by the Invention, except those you might impose through Focus, or restrict with Complications.
During any Scene dedicated to the narration of the design and construction of your Invention, you roll a Support pool. That Support is composed of your Resources, Skills, abilities plus those of anyone Supporting you. The Support bonus rolled is the number of Power Points available to you to build your Invention, up to your Amplitude. This total may never exceed your Amplitude in Invention. It doesn’t have to be a single Invention, it could be multiple inventions, but their total cannot exceed your Amplitude in Invention either.
For example, Dr. Nefariex has 10 Amps of Invention, which cost him 10 Power Points. Each Session he has the option of roleplaying the design and construction of an Invention of up to 10 Power Points in value. He would throw his Resources D, any applicable Skills (say Technology/Robotics 14D), plus those of any of his assistants (Gorg and Gurg, his alien Sidekicks) into a Support pool and roll it. Let’s say it results in a Support bonus of 5, he’d have 5 Power Points to apply to his Invention for that Session. If the result was 12, he’d only be able to use 10 because his Amplitude is 10. 
The Invention lasts until the end of the following Session and is always considered a Vulnerable Item. All Inventions have a Structure equivalent to at least their Power Point value (unless Mighty Soak or Armor is added, or the inherent Soak/Structure is greater, such as for a Minion or Creation). The Invention may add to or increase any currently existing Perks or Powerks if they are identical, otherwise they may Support if appropriate. If you don’t adequately describe the Look and concept of your Invention to the GM, they may disallow it.
Inventions may become permanent by spending a Hero Point. Subsequent Permanent Inventions may stack onto previous ones, if they were initially designed to do so, building bigger and better Inventions. This is how evil geniuses build giant world destroying devices and armies of robotic Minions and so on. You may stack as many separate Inventions as you have Amplitude in Invention.
For Example, Dr. Nefariex is working on a ray that will incinerate the Earth. His current Amplitude of Invention is 10. That means that he may eventually build a permanent Invention composed of ten stacks of 10 Power Point (provided he rolls high enough each Session) for a total of 100 Power Points. He’d also need to expend a Hero Point (Villain Point really) each time he made an Invention permanent. Remember that all powers generated through Invention are still subject to the Limits of their inventor. Best of luck Doc Nef.
Damaged Inventions can be repaired (see Repairing Things), Destroyed Inventions are gone, along with any Hero Points used to create them.`
},{
	name: 'Invisible',
	cost: '(4)',
	description: `you, and anything you’re wearing, cannot be seen. You may add +15 to any attempts to hide or get past detection in the visible spectrum. Likewise, you add +15 to any static defenses while Invisible in combat. Unless already engaged in combat, an attacker must “sense” you somehow in order to attack you. This always requires an Action, and a Perception Skill/Specialization roll against your Stealth (if you’re trying not to be detected). That assumes the attacker is actively looking for you. 
I leave it to the GM to decide what tactics against Invisible opponents works; paint splatter, clouds of dust, footprints, rainfall and so on. Such things may easily negate or mitigate the effects of Invisibility. Remember, Invisibility applies solely to the human visible electromagnetic spectrum. All other types of “Invisibility”, say to sonar, or ultraviolet or cosmic awareness and so on, is handled by the Powerk “Insensible”, see above.
If always Invisible take the SuperFreak Complication, otherwise you have the Activation Complication.
Ki (see Power Set) pronounced “key”, it literally means breath, or spirit. May also be pronounced Chi as in “ChEE”. In many Asian martial arts traditions, it is the mystical energy that permits feats of amazing power, strength and dexterity. Much like Magic or Gadgetry, it is a catch-all for all the awesome Kung-Fu mystical superpowers out there. Examples might include Body Weapon, Combat Skills and Perks, Heal, Leap, Mighty Might, Mighty Moves, Mighty Soak, Mighty Speed, Mighty Weapon, Regeneration, and so on. Your Limiting Skill could be Will, Brawl or Melee.`
},{
	name: 'Leap',
	cost: '(1+)',
	description: `you can jump, far. You can leap a horizontal distance of up to 10m and a vertical height of one scale lower (1D metres). You may need to make an Athletics roll to stick difficult landings or jump under challenging circumstances. You don’t take damage from landing unless you Complicate somehow. Once per Scene per Amp you can add +1D damage (per Amp) to any Brawl or Melee attack while Leaping, this requires an Action to Leap. You can double your Dodge against one attack, once per Scene per Amp as you Leap away, as an Action. This assumes that there is a sturdy surface from which to Leap. Each Amp also upscales both the vertical and horizontal Ranges. If your Range exceeds your normal travelling Velocity, you may use your Leap Range as your new Velocity. Range: 10m (1D m vertical). Limit: Athletics`
},{
	name: 'Levitation',
	cost: '(1)',
	description: `you can float off the ground (along with anything you could normally carry) and move at normal human walking Velocity (10m/Round) maximum.`
},{
	name: 'Life-Support',
	cost: '(3)',
	description: `You can exist at the bottom of the ocean, surface of Venus, deep space and any other environment typically inimical to human survival or normally requiring a protective suit. This Powerk doesn’t require a suit necessarily though. You have one Amp of Immunity to damage originating from such environmental forces (pressure, gravity, heat, cold etc.) as the GM permits.
Life Support will not protect you from environments that are automatically fatal, such as the surface of a star or the center of a black hole. 
Any exceptions to your Life Support (such as deep space, or underwater) should be treated as the Missing Effect Complication, rather than a Focus. `
},{
	name: 'Lingering Effect',
	cost: '(3+)',
	description: `allows the effect of a Powerk to continue after the initial D-code effect has been applied. Every Round thereafter, that effect is reapplied with a -1D penalty, cumulative each Round until 0, or terminated. Repeated hits during the Lingering Effect will re-establish the effect to its highest D-code and the per-Round countdown will begin again from there. Multiple hits on the same Round delay the -1D penalty by 1 Round for every additional hit. Thus, getting hit three times in the same Round means you take full damage for two more rounds, and thereafter reduce the subsequent damage by a cumulative -1D each Round. Lingering damage needs no additional “to hit” rolls. The Effect Lingers for as many Rounds as Amplitude in Lingering Effect.
This Powerk is meant to simulate the effects of corrosives or incendiaries but may apply to other phenomena as the GM permits. Lingering Effect must be bought separately for each Powerk to which it applies. Limit: best of Might or Mojo.`
},{
	name: 'Link',
	cost: '(1)',
	description: `allows you to use one Powerk simultaneously with another that you possess, requiring only a single Action to use both together. Example; Sound Blast and Stun. If Linked, whenever you use Sound Blast or Stun, you can freely use the other without using another Action. You may still use the Powerks independently of each other. There is no limit to the number of Powerks you can Link, but each Link must be purchased separately.`
},{
	name: 'Microscopic Vision',
	cost: '(1+)',
	description: `you can see in the microscopic up to your D-code in negative Size-scales (see Mini Scale). Once per Scene per Amp double the Skill D on any appropriate rolls that might benefit from this ability. D-code: Mind or Mojo, Range: normal human vision, or yours, whichever is better.  `
},{
	name: 'Mighty Audition',
	cost: '(1+)',
	description: `your hearing is acute. Double the Skill D on any rolls benefitting from super hearing once per Scene per Amp. All Auditory Ranges upscale by one per Amp. Normally whispers can be heard at a few metres, normal speech at 10m, shouting at 100m, and so on. `
},{
	name: 'Mighty Gustation',
	cost: '(1+)',
	description: `you have an incredible sense of taste (this does not apply to fashion or interior decorating). Double the Skill D on any roll that would improve with superhuman taste buds (detecting poisons, tracking, Insight, crime scene investigations and so on) once per Scene per Amp.
Mighty Might (2/pip) lets you raise your Might Attribute by +1 pip, adding +1D costs 6 Power Points. Soak and all Skills/Specializations related to Might also increase accordingly. `
},{
	name: 'Mighty Mimic',
	cost: '(4+)',
	description: `you can take on the features and abilities of anyone/thing that has been within your Range for your Duration. The abilities you Mimic cannot exceed those of the original source, nor can their Power Point value exceed the Amplitude of your Mighty Mimic Powerk. If enough Power Points are unavailable, then the closest possible approximation results. All Powerks respect the Limits imposed by the Mimicker, not the subject of Mimicry. 
There is no defense or resistance to Mimicry by the subject. They simply must be within range (although if Range remains contact, then a Brawl roll will need to be made to make contact against an unwilling target).
Alternative Form (the appearance of your target) is automatic if you choose to Look like your subject. You may double any Skill D required to pass for the mimicked person/item. You may Mimic as often as your Amplitude per Scene. Duration: Scene, Range: Contact. 
Mighty Mind (2/pip) lets you raise your Mind Attribute by +1 pip, adding +1D costs 6 Power Points. All Skills/Specializations related to Mind also increase accordingly.  
Mighty Mojo (2/pip) lets you raise your Mojo Attribute by +1 pip, adding +1D costs 6 Power Points. All Skills/Specializations related to Mojo also increase accordingly.`
},{
	name: 'Mighty Morph',
	cost: '(6+)',
	description: `You can transform things into other things, in both appearance and substance, to within +/-1 of its original Size. Changing appearance is automatic, you may Alter Appearance freely as part of Mighty Morph, at the same Amplitude. Your D-code will add to Skill rolls used to pass as the object of your transformation (Deception, Disguise etc.).
Any Powerk effects associated with your new form can be manifested up to your Amplitude in Power Point value, as a Flex Powerk. For example, turning yourself into an eagle should allow you to fly (Wings), have excellent vision (Mighty Vision) and claws (Body Weapon). Since these abilities cost about 4 Power Points you’d need an Amplitude in Mighty Morph of at least 4.
The GM reserves the right to refuse powers that are not appropriate for the given form. So, the eagle above would probably not have laser eye beams or FTL. Common powers associated with a Mighty Morph transformation include Mighty/Mini Scale, Armor or Mighty Soak, Alter Density and Mass and so on. Morphing into other living organisms might require Body Weapon, Flight, Aquatic, Toxin etc.
Morphing sections of your object/target is the same cost as Morphing the whole. Thus, Morphing your hand into a gun still costs 5 Power Points for the X-Blast Powerk that comes along with it.
To Morph involuntary targets, you need to overcome their Will with your D-code. Non-sentient objects resist your Morph D-code using their Structure. Common Focuses of Mighty Morph could include Self-only, Others-only, types of transformations (into gold, into animals) or subjects of transformations (humans only, animals only, etc.). Not having enough Power Points to cover all the required powers of a particular form results in a new form which is the closest possible approximation.
Focuses may include but are not limited to:`
},{
	name: 'Mighty Olfaction',
	cost: '(1+)',
	description: `your sense of smell is superhuman. All your olfactory ranges upscale by one per Amp. Normally humans can smell (without the benefit of air currents) strong odors from 10m away, moderate odors from a few metres away, and faint odors from within reach. Double the Skill D on any olfactory dependent Skills (detecting traps, poisons, crime scene investigations, insight etc.) once per Scene per Amp. 
Mighty Potential (4/Amp) allows you to surpass the Limits on a specified Perk or Powerk by one Amp per Amp of Mighty Potential. You must still purchase the Amp in the specified Powerk, effectively making the cost per Amp of most Powerks 5 Power Points per Amp beyond their stated Limit.
For example, SpeedStar wants to raise her Mighty Speed by an Amp, but she already has an Amplitude of 4, which is already at her Limit (D in Moves, her Moves is 4D). She could either increase her Moves or she could buy an Amp of Mighty Potential/Mighty Speed. To raise her Moves Attribute another D would cost her 6 Power Points. One Amp of Mighty Potential costs 4 Power Points. In both cases she would have to pay another Power Point for the additional Mighty Speed Amp as well. Even though it’s cheaper to buy Mighty Potential/Mighty Speed, her player feels it’s more in keeping with her character concept to raise her Moves Attribute, and buy another Amp in Mighty Speed later, with the new Limit. Thus, she spends 6 Power Points to raise her Moves Attribute 1D, raising Mighty Speed’s Limit by 1, even though it would have been cheaper to buy an Amp of Mighty Potential/Mighty Speed at 4 Power Points. She wants to be superhumanly agile as well as superhumanly fast.`
},{
	name: 'Mighty Scale',
	cost: '(1+)',
	description: `you are much larger than typical character size and possess all the Scale bonuses to Soak, lift capacity, and rolled damage, as well as any associated disadvantages. Your opponent gets a corresponding bonus to hit you, and your Scale bonus acts as a penalty to such Skills as Stealth, or operating equipment meant for characters of smaller Scale.  You may however, add your Scale bonus to attempts at physical Intimidation.
Each Amp adds +1D Size-scale, and 3 to your Size. If you are permanently huge, you must have the SuperFreak Complication, otherwise you must have the Activate Complication. If you take the Activate Complication, you can only enlarge to that Scale, no others. Limit: Best Attribute.`
},{
	name: 'Mighty Soak',
	cost: '(1+)',
	description: `your inherent ability to withstand injury is increased. Soak increases by 1 per Amp.`
},{
	name: 'Mighty Speed',
	cost: '(6+)',
	description: `This Powerk is for those classic speedster heroes (Flash, Quicksilver, Speedstar etc.). It simulates many of the advantages of being superhumanly fast.
Add your D-code to any of your inherent Velocities (those that don’t rely on technology or external sources), and to your Initiative roll.
Double the Skill D to any rolls that would benefit from being fast, once per Amp per Scene. These might include Athletics, static defenses, attacks, and other Skills with an appropriate rationale.
Each Amp gives you one “free”, unpenalized Action per Round, over and above your Moves-based Action limit.
Once per Session, Mighty Speed lets you have Bursts of Action. A Burst of Action represent Actions performed so rapidly that the Duration Scale normally required for the task is reduced by one Scale per Amp expended. You can use all your Amps on one task or divide them up among many, once per Session. Thus, at an Amplitude of 3, you can take an Action that would normally require a Scene and decrease it by three Duration Scales into a single Action. Alternately, you could reduce one task Duration by two Scales, and another by one Scale. Or, you could reduce three Actions by one Duration Scale each. You can even reduce the Duration of an Action to “Instant”, a Duration Scale of 0, or effectively undetectable.
So, for example, if Speedstar wanted to change her flat tire, it would require a Scene. But she’s late for her night shift so she wants to take care of it quickly. If she uses four Amps, she can reduce the time it takes from a Scene to “instant” by downscaling the time required by four Scales (see Scale Table). In no time (literally), her car is back on the road. 
In combat a Burst of Action can be thought of as a Burst of Attacks. Add +1 to attack and damage/effect rolls per attack in the Burst, up to the static value of the Skill and damage/effect roll respectively. For each target beyond the first, reduce the result by 1. So, if Speedstar uses a Burst of Attacks to convert a Round of Actions into a single Action, she would use the number of her attacks beyond the first as a bonus for both her attack rolls and damage. This bonus cannot exceed the static value of the D-code it applies to. 
Do not roll all of your attacks separately, that holds up the action and is a drag for everybody else in the combat. Combine them into a single Burst roll, and roll it once, applying the results to all the targets in your attack. Also, in a Burst of Actions/Attacks, there are no Multiple Action penalties, although you are still limited to a number of Actions based on your Moves Attribute (plus any other applicable Powerks).
Alternately, if a Burst of Attacks is being used to hose down an Area, subtract the Area’s D-code from the bonus, and apply the result to everyone in that Area. The number of targets cannot exceed the total number of attacks in the Burst though.
Using the example with SpeedStar, she uses her Burst of Attacks to compress a Round worth of Actions into a single Action. That would give her eight attacks in that Action, four from her Moves Attribute of 4D, but also another four from her four Amps of Mighty Speed. She chooses to attack her foe with Brawl, rolling 4D+8, +1 for each additional attack. This gives her a total of 6D+2 to hit. She rolls it once, representing all eight attacks in one Action. If she hits, she applies the same principle to her damage, in her case 2D+8, or 4D+1. But hold on, her Burst of Attacks bonus cannot exceed the static value of the roll it’s affecting, thus her bonus cannot exceed the static value of her damage roll of 2D, or 6. So instead she rolls 2D+6, or 4D for her damage. If she were attacking two opponents, her attack roll would be 4D+7 (number of attacks minus number of targets beyond the first), or 6D+1, against both targets simultaneously, and her damage would still be 2D+6, or 4D, against both. The rolls would be made once and applied to both opponents.
And lastly, Mighty Speed can be used as a Flex Powerk up to its Amplitude in Power Point value. Common Flex Powerks for Mighty Speed might be Wall/Water Walking, Regeneration, Explosion or Stun (Sonic Boom), and so on. As usual, GM approval and Limiting Skill roll required.
D-code: Least of Mind or Mojo. Limit: Moves
(Sidebar) Mighty Speed need not be a Mighty Drag
Even without Burst of Attacks, in combat, speedster-type characters (or those with a ridiculous Moves Attribute) often have a rather large number of Actions. If you and your group don’t mind waiting around for El Speedo to resolve his several attacks each Round, then that’s cool. But when players with several attacks per Round slow your game down and this becomes a problem, treat such attacks a little like a Burst of Attacks, except that Multiple Action penalties apply. 
So, for each attack in that Round beyond the first, a prolific character adds a +1 bonus to both attack and damage/effect rolls to a maximum of their static Skill and damage/effect rolls, respectively. Against multiple opponents, they’d subtract -1 per opponent beyond the first, but couldn’t attack more opponents than they have Actions in that Round.
Not only is this limited by the number of Actions per Round based on Moves Attribute, but also on the attacking Skill. You can have a Moves of 10D, but if your Brawl is 4D, you’ll be limited to 4 Brawl attacks per Round, due to the Multiple-Action penalty effectively reducing your four attack rolls to 1D each (-3D for four Actions on your turn).
If El Speedo has 7 Actions a Round and has a Brawl of 5D and damage of 4D, he could attack 5 times that Round (limited by his Brawl Skill of 5D). Rather than rolling 1D five times, he’d roll 1D+4 to attack (or 2D+1), factoring in Multiple Action penalties, and 4D+4 (or 5D+1) damage if he hits. Rather than rolling 1D to hit for each of the five attacks, the aggregate rolled result would apply to all affected targets simultaneously.
Hopefully this process will encourage speedsters and others with a high number of attacks per Round to combine them into as few rolls as possible, saving everyone a little time, and preserving the fast, exciting pace of combat.`
},{
	name: 'Mighty Tactility',
	cost: '(1+)',
	description: `your sense of touch is superhuman. Double the D on any Skill rolls that might benefit from such incredible tactile senses, once per Scene per Amp. Examples might include Medicine, Technology, Insight, Dodge, use your imagination. `
},{
	name: 'Mighty Vehicle',
	cost: '(2+)',
	description: `A Vehicle is your ride, sometimes your home and often a companion. Vehicles are in part described by four Attributes; Body, Maneuverability, Scale and Velocity (see the Vehicles section later).
The Body Attribute refers to the Vehicle’s inherent strength, its chassis or hull. The Scale Attribute refers to the Size Scale of the Vehicle. Scale modifiers are added to damage/effects inflicted by the Vehicle or any of its weapons/powers. Scale modifiers add as a bonus to an opponent’s “to hit” rolls against the Vehicle. Bigger Vehicles do more damage and are easier to hit.
Because Vehicles are objects, they use Structure to determine their resistance to damage. A Vehicle’s Structure is its static Body plus its static Scale. Thus, an automobile with a Body of 4D and a Size Scale of +2D, would have a Structure of 18. Buying extra Soak or Armor with Power Points can increase this.
Sidebar: Wait, What? Structure, again?
Yes, yes, I know. Elsewhere we’ve said Structure is the sum of an object’s Size and Durability. But now, Vehicle Structure is static Body plus static Size Scale. Which is it? The answer; it’s both. If you just need to know a random scenery-car’s Structure because you’re smashing through it or tossing it between innocent bystanders and white-hot plasma beams, then use its Size plus Durability. If it’s your car, a recurring prop or perhaps even your own Mighty Vehicle, and its statistics are known, then use its Body plus Scale. Either method, their Structures should be about equal.
A Vehicle’s carrying capacity is equal to its static Body plus static Scale. This value is the Size that the vehicle can transport (either as cargo or by towing it) without suffering penalties. Vehicles that Glide or use the Wings Powerks can only pull half that amount. Each Size point above this subtracts 1D each from Velocity and Maneuverability, up to a maximum of the Vehicle’s D in Body. Thus, a typical car can transport an 18 Size of cargo. If necessary, it could pull another 4 Size Points for a total of 22 (with a Body of 4D) but both its Velocity and Maneuverability would be reduced by 4D as well. A Velocity of 0 or less means the Vehicle cannot move. 
Maneuverability represents the handling of the vehicle. Maneuverability is applied to Skill rolls when trying to operate a Vehicle. The lower the value, the harder it is to get your vehicle where you want it to go. See Vehicle Combat and Paces, Races and Chases sections below. 
Velocity is the Vehicle’s cruising speed expressed as a D-code. The operator can push the Vehicle to one Scale faster but increases the risk of vehicle breakdown due to strain (see Vehicles below). A Vehicle must have at least one mode of transportation. Land, overwater, underwater, atmospheric flight or space fight being the most common. Obviously, there are others. If more than one mode is selected (say an amphibious car), it needs to have both a Velocity and Maneuverability Attribute for each mode. For an amphibious car, both a land and water Velocity and Maneuverability Attribute is required.
Mighty Vehicles all start with a Scale of +2D, a Maneuverability of 0 and a Velocity of 4D in a single mode of travel. Another 8D can be spread amongst the Attributes (including Scale, Maneuverability and Velocity), and 4 Power Points to spend on Vehicle specific powers. Like Base, such powers can only be used while operating the Vehicle. Suggestions include other modes of transport; Aquatic, Burrow, Flight, FTL, Mighty Velocity, Teleport, and so on. Powerks representing other modes of transport always use Mighty Vehicle’s basic 4D as their starting Velocity (unless already faster, like FTL). You can reduce your Vehicle’s Scale by purchasing Mini Scale for it. Powerks always use the Mighty Vehicle’s hero’s characteristics for any Powerk Limits.
Some Vehicles move slower than 4D, or don’t move in three-dimensional space at all (time machines, dimensional portals etc.). For these Mighty Vehicles, each reduction in Velocity by 1D yields an additional Mighty Vehicle Power Point, or 1D for another Vehicle Attribute. Maneuverability can be reduced below 0, but never by more D than the Vehicle’s Scale. Each D reduction in Vehicle Maneuverability generates either one Power Point for the Vehicle, or 1D for another Vehicle Attribute. You cannot trade off D in Scale, the only way to change Scale is to buy an appropriate Powerk such as Mini Scale, Mighty Scale etc.
With GM permission, all Vehicles can start with “standard” features, the things you’d find in a newly purchased car or boat; headlights, an AM/FM radio, storage space, roof racks and so on.
Additional Amps add another Power Point to your Mighty Vehicle, or +1D to an Attribute. 
Sidebar: Infinite Power Point Feedback Loop, Giddyup!
Attention all munchkins out there, right about now you might be thinking “I’m gonna buy me a Base, then use the Base-associated Power Points to get me a sweet Vehicle, and use those Points to get me a sweet Sidekick with some kickass Invention, and maybe their own Vehicle, with even more Power Points…”, but before your head spins off into game-destroying logic, let me curb your enthusiasm. Powers like Base, Minion, Sidekick and Vehicle, come with extra Power Points of their own, and if compounded, become a never-ending feedback loop of Power Points. We get that, we are aware, after all, we did playtest this game. Such Power Point compounding Powerks shouldn’t be purchased using other such Powerk-associated Power Points. So, using your Base’s Power Points doesn’t allow you to buy Minions, or a Vehicle or anything else, unless such things are completely contained within the confines of the original Powerk. Thus, the Minions can’t leave the Base, the AI Sidekick can’t leave the Mighty Vehicle, only the Minion can drive its Vehicle, and its Inventions don’t work outside of the Base and so on. As GM, you can (and should) disallow any intentional exploitation of bonus Power Points that accompany these Powerks. But having said that, a player who uses them for cool ideas, that doesn’t unbalance your game, should be allowed to do so. As always, GMs should use their best judgment.
The Mighty Marksman decides he needs a car, The MarksMobile. It starts with a Scale of +2D and a Velocity of 4D. He has 8D to distribute among Body, Scale, Maneuverability and Velocity, as well as 4 Power Points to spend on “stuff”. He envisions a racy, low slung sportscar, so it’ll have to be fast. At 5D Velocity, he’s in the “race car” ballpark for Velocity. That leaves only 7D left. He wants the car to be tough, so he places the remaining 5D into Body and the remaining 2D in Maneuverability. With his 4 Power Points he ponders his options. Should he buy an onboard AI (Sidekick)? Perhaps the Vehicle should have Flight (Flight, Glide, Wings or Levitate), which would start at the Mighty Vehicle’s default 4D Velocity? What if he just sticks it into Armor? Decisions, Decisions.
MarksMobile (Scale +2D)	Cost: 2
Bad-ass Mighty Vehicle for the MarksMan. All black matte with his signature stylized bullet spray-painted on hood. 
Body: 5D	Maneuverability: 2D
Velocity: 5D	Structure: 21
Perks: Invisible (yeah baby!).
In another example, Time Templar, wants a Mighty Vehicle that travels through time. He wants it to fit over his shoulder like a large garment bag that he simply steps in and out of. He’d need to reduce the Mighty Vehicle’s Scale by buying Mini Scale, but since the bag is essentially immobile in three-dimensional space he could sacrifice all 4D of Velocity and wind up with a total of 8 Power Points for Vehicle powers (the original 4 plus another 4 for the sacrificed Velocity D). He places 0 in Maneuverability and throws 3D into Body, leaving 5D which he converts to 5 more Vehicle Power Points making it 13 total. Next, he buys two Amps of Mini Scale to make the bag a Scale of 0 using 2 of the Mighty Vehicle’s Power Points. To RetCon (travel backwards in time) he spends 6 of his Vehicle’s Power Points. He spends five more to Amplify his RetCon.
The Time Bag (Scale 0)		Cost: 5
Stylish garment bag that you step into and move backwards in time. Also keeps your tuxedos looking freshly pressed.
Body: 3D	Maneuverability: 0
Velocity: 0	Structure: 9
Perks: Mini-Scale 2, RetCon 6
It’s up to the GM to determine what sort of modifications a technically gifted character can perform on their Mighty Vehicle without resorting to additional Resources or Power Points. Fifty-caliber machine guns mounted on top of the Justice Van? Sure, why not? Nitrous oxide fuel injectors for extra Velocity? Sure. Just keep in mind that such modifications can Complicate, and when they do, damaging or even destroying the Vehicle should be a possible outcome.
Vehicles are always considered Vulnerable Items. Damaged Vehicles must be repaired, and destroyed Vehicles don’t come back until next Session, and only with the expenditure of a Hero Point and a rationale for its return. 
You may double one Skill roll related to your Vehicle once per Session. You may freely Link any of your own Powerks to your Vehicle. Each Mighty Vehicle counts as its own Powerk.
Limit: Arcane, Drive, Pilot, Science, Stamina, Technology, or Will.
(side bar) Crime Fightin’ RVs
It may occur to smart players to Link Vehicles, Sidekicks and Bases. Let them. Comics are filled with cadillacs, smart Alec space stations and time-machine-phone-booths, that are often characters in their own right, and serve the dual purpose of getting characters where they need to get, as well as giving them a place to hang their cowl. As the GM, say yes to cool ideas, and reserve the right to say no to ideas that wreck your playground, or are simply attempts to subvert the rules without adding anything to the story.`
},{
	name: 'Mighty Velocity',
	cost: '(1+)',
	description: `you can upscale the Velocity of any one mode of transportation. Limit: Mind, Moves or Mojo.`
},{
	name: 'Mighty Vision',
	cost: '(1+)',
	description: `your visual Range will upscale by 1 per Amp. Normally humans can read within a few metres, sight targets unaided at 10s of metres, and spot far way objects at about 1km (barring interference). Once per Scene per Amp you can double the Skill D of any roll that would benefit from increased visual range and acuity.`
},{
	name: 'Mighty Weapon',
	cost: '(5+)',
	description: `you may add damage to any weapon you use. Once per Session per Amp you may double any Skill roll with your Weapon.
Each Amp adds +1 pip to damage. Focusing in a single type of weapon (say a weapon with its own Skill Specialization) would be a third-degree Focus of this Powerk, reducing its base cost to 2.
If your Mighty Weapon is Focused on a projectile weapon, you somehow never run out of ammunition (arrows, boomerangs, bullets, shuriken, you name it), unless you choose to take a Complication such as Ammo or “I’m Out”, or you are specifically deprived of the weapon by the story.
Mighty Weapon allows you to Link other Powerks to it at no additional Power Point cost. The damage augmentation applies only when you wield your Mighty Weapon. It doesn’t apply to someone else using the weapon. D-code: +1/Amp. Limit: Arcane, Attack Skill (not Specialization), Science, Stamina, Tech or Will.`
},{
	name: 'Mini Scale',
	cost: '(1+)',
	description: `you are much smaller than typical character Size and possess all the Scale bonuses to your passive defenses, and Size-affected Skills such as Athletics, Stealth and so on. You also have the same penalties to your damage rolls, and your Soak against larger opponents.`
},{
	name: 'Negate',
	cost: '(4+)',
	description: `allows you to nullify one Power Point per Amp of any Perk, Powerk or Skill for its Duration, no resistance roll required, once per Scene per Amp. Incomplete Amps (those reduced below their base cost) cease to function, or function as a Lesser ability (see Lesser Powerks) as determined by the GM. A third-degree Focus in Negate would be towards a specified Powerk, Perk, or Skill/Specialization. Thus, Negate X-Blast/Fire would be a third-degree Focus, costing 1 Power Point.
Successive Negations don’t stack but will stack with the effects of Diminish (see the Powerk Diminish). You may only Negate as many Power Points as your Amplitude at any given time, on any single target. Negate will apply fully to all targets within an Area though, if an Area effect is created.  Area: Contact, Duration: 1 Round, Range: Contact.`
},{
	name: 'Never Misses',
	cost: '(6+)',
	description: `Once per Session per Amp, you will hit your target regardless of their static defenses, so long as they are in range, and you can perceive them. If they are behind complete cover (enclosed in an armored structure, buried underground, or completely concealed behind a wall etc.) your attack will take the shortest path to the target, cutting through, if possible, the intervening barrier.
Focuses by attack type. Focusing on a combat Skill Specialization or Powerk acts as a third-degree Focus. Limit: Arcane, Attacking Skill, Science, Stamina, Tech, Throw or Will.`
},{
	name: 'Non-Solid',
	cost: '(3+)',
	description : `You have, or can have, a physical state of matter that is not solid. Choose between Granular, Liquid, Plastic, Swarm or Vapor. Each of these is a separate Powerk, with its own characteristics (see below). Being Intangible or Incorporeal are different Powerks, refer to their own entries respectively.
You can spread yourself out over an Area/Volume Scales equal to your Amplitude. While Non-Solid, physical attacks with an Area Scale not greater than your own subtract 10 from their damage/effects. So, in your Non-Solid state, if Character-Scaled, a fist or energy blast would do 10 less damage to you. However, a grenade blast covering the next Area Scale up (1D metres), would do full damage.
If attacking something physically, you can ignore protections that are not completely enclosed as you extrude around armor, shields or gaps between seams and the like, as your Non-Solid state would dictate (see below). Thus, you ignore Blocks and Parries. While spread over an Area, targets trying to evade you get a penalty to their Dodge equal to the static value of the Area Scale you cover (-1 for 1.5m, -2 for 1D metres, -3 for 10 metres and so on, see Scale Table).
Once per Scene per Amp, you may double the D for Skills and statics that might reasonably benefit from your Non-Solid state. Attacks, static defenses, Athletics and so on are some suggestions. However, your effective Might (and Soak) is reduced by the D-code of the Area Scale you cover (-1 pip for 1.5m, -2 pip for 1Dm, -1D for 10m and so on; see the Scale Table). 
There are five Non-Solid states, each must be purchased as a separate Powerk. They are:
Granular: you are composed of very fine particles. Each particle can still be appreciated by normal human senses. Sand, Gravel, Ice, Snow, all might behave as if Granular. You can fit through any barrier with openings small enough to permit one of your granules.
As a Flex Powerk, you may manifest any of the following Powerks up to a Power Point value equal to your Amplitude in Granular; Anatomical Separation, Asphyxiate, Body Weapon, Extra Limb, Obscure, Push, Reach, Snare, Vortex, or anything else the GM deems appropriate.  
Liquid: You are a fluid. You can squeeze through anything that isn’t watertight. As a Flex Powerk, you may manifest any of the following Powerks up to a Power Point value equal to your Amplitude in Liquid; Anatomical Separation, Aquatic, Asphyxiate, Extra Limb, Reach, Snare, Splatter, Vortex, Wall-Walking, Water-Walking, and others as the GM sees fit.
Plastic: you can bend, twist, squeeze and stretch your topology, into any shape that doesn’t violate your surface (you can’t put holes in yourself or split into pieces). You can squeeze through any opening one could put a finger into. You can alter your shape somewhat, but you are still obviously you, just shaped differently.
By changing your shape, you can imitate other powers. As a Flex Powerk, you may manifest any of the following Powerks up to a Power Point value equal to your Amplitude in Plastic; Asphyxiate, Body Weapon, Bouncy, Extra Limbs, Glide, Leap, Parachute, Reach, Snare, Swing, Wall Walking, and others as the GM sees fit. You can twist into simple shapes, but nothing more complex than a simple tool (lever, screw, wedge, wheel etc.). 
Swarm: you are, or can become, composed of myriad entities that cooperate to form “you”. Examples might include birds, rodents, insects, tiny robots and so on. Swarm components that are microscopic might be better described by either of Liquid or Vapor. You may squeeze through any barrier with holes small enough to permit members of the Swarm.
as a Flex Powerk, you may manifest any of the following Powerks up to a Power Point value equal to your Amplitude in Swarm; Anatomical Separation, Extra Limbs, Leap, Levitation, Mighty Velocity, Wall-Walking, Water-Walking, Wings or anything else the GM permits. Powerks that don’t make sense given your nature should be disallowed (Swarms of Piranhas cannot Levitate for example). 
Vapor: You are gas. But you don’t necessarily have to be a gas; dust and smoke also behave like Vapor. You can pass through any barrier that is not airtight.
You may manifest any of the following Powerks up to a Power Point value equal to your Amplitude in Vapor as a Flex Powerk; Asphyxiate, Anatomical Separation, Glide, Invisible, Levitate, Obscure, Push, Vortex or as your GM sees fit. 
If you are always Non-Solid, you have the SuperFreak Complication, otherwise you have the Activation Complication. Area: Self, Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Obscure',
	cost: '(1+)',
	description: `you create a phenomenon that interferes with a specified sense within an Area of effect. Each sense affected is considered a separate Powerk. Your D-code acts as a penalty to all actions taken within the affected area that depend on that sensory modality. This can stack with penalties associated with Sensory Block. Area: 10m, D-code: Mind or Mojo, Duration: Scene, Range: 10m, Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Omen',
	cost: '(1+)',
	description: `once per Session per Amp, you get advanced warning of things to come, or things that have been, left to the discretion of the GM as to its form or clarity. Perhaps you read Tarot, the I-Ching, tea leaves, or have oracular dreams, that is up to you. The revelation should almost never be something straightforward or obvious, but should require some sorting out and contemplation, and should always be interpretable in more than one way.`
},{
	name: 'Pain',
	cost: '(3+)',
	description: `you inflict excruciating pain on your target, they must beat your D-code with the least of their Will or Stamina. On a failure, they are Distracted as described in the Conditions section, and if the accumulated Successes equal or exceed their Will or Stamina D, they are either Stupefied or Comatose (your choice) as the Condition. You may attempt to induce Insanity using Pain, your target may add 10 to their resistance roll. See Insanity and Trauma rules below. 
It is the GMs discretion as to whether robots, aliens, undead etc. experience pain and are affected by this ability. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Parachute',
	cost: '(1)',
	description: `you can use atmospheric drag to slow you down to a velocity of 10m/Round. This applies up to your static D-code in Size. Alternately you may reduce any falling, or Knock-back damage by your D-code. You have limited gliding ability; with a TN 15 Athletics roll you can steer yourself and achieve a horizontal Velocity of up to 10m/Round (+1D Velocity). D-code: Athletics/Skydiving, Tech (if technological in nature) or other acceptable Skill.`
},{
	name: 'Paralyze',
	cost: '(4+)',
	description: `you have a ranged attack that inflicts the Paralyzed Condition on your target if you overcome their Stamina or Will (your choice at purchase) with your D-code. D-code: 4D, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Passive Defense',
	cost: '(1+)',
	description: `you have an ability that makes you harder to hit. Each Amp adds +4 to your Dodge, this bonus is not reduced when surprised or unaware of an incoming attack. Limit: Moves, Mind or Mojo.`
},{
	name: 'Penetrating Attack',
	cost: '(4+)',
	description: `allows an attack to bypass a single pip/Amp of protection or resistance to those attacks. Examples include resistance rolls; Stamina, Willpower, Soak, Armor or Force Field. Any of the above would be considered a 3rd degree Focus of this Powerk. It does not affect static defenses like Block, Dodge or Parry.
Penetrating Attack must be purchased for a specified attack, each is its own Powerk. A common 3rd degree Focus of this Powerk are armor-piercing bullets (Penetrating Attack/Armor(1+)). Limit: Arcane, Science, Stamina, Tech or Will. `
},{
	name: 'Penetrating Vision',
	cost: '(1+)',
	description: `you can see through opaque material to a depth of a few metres. Once per Scene per Amp double the Skill D of any roll that would benefit from being able to see through things. Range: normal human vision, or yours, whichever is better.  Depth: 1D metres.`
},{
	name: 'Pocket Dimension',
	cost: '(3+)',
	description: `you have or can create a tiny little reality of your own that you can slip into. It takes an Action to do so. The entrance is about the size of a doorway (Area: Self), and the inner dimensions are those of a small room (1D metres) in diameter. Your Dimension can look any way you want but any Perks or Powerks available within apply only to those that are in there and must be paid for as if Pocket Dimension were a Base of equivalent Amplitude. Additional Power Points could be spent on your Pocket Dimension to add more features.
While inside, your Pocket Dimension’s portal must stay outside and may be visible to others unless you’ve taken measures to hide it. You can bar entry (or exit) to others by pitting your D-code against the Will of any intruders. Negation of the Pocket Dimension causes those within to be trapped until it can be opened once more. Any Power Points spent on its interior are also trapped until the portal to the Dimension is opened again.
You may open as many Pocket Dimensions as Amplitude, per Scene. Spending a Hero Point makes a Pocket Dimension permanent. You may freely Link any Powerks you possess with your Pocket Dimension. Within your Pocket Dimension, infinite Life Support is assumed, unless otherwise specified. Area: Self (Portal), 1D metres (Dimension), D-code: Arcane, Science, Stamina, Tech or Will. Duration: Scene, Range: 10m.`
},{
	name: 'Possession',
	cost: '(4+)',
	description: `you can take over the consciousness of another, using their physical form and all their Skills to do your bidding. Meanwhile, your physical form is Comatose. You must overcome their Will with your D-code. Any Actions where they are injured or forced to do something contrary to their values allows another resistance roll. Like Astral Projection, if your own body is injured, each level of injury creates a 1D penalty of Distracted Condition. If your own body is killed you must continue to possess your target, find a suitable vessel for your psyche or be forced to vanish into oneness with the Cosmos at the end of your Duration. Spending a Hero Point will make a Possession permanent. D-code: Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Influence, Science, Stamina, Tech or Will.`
},{
	name: 'Postcognition',
	cost: '(4+)',
	description: `you can perceive events that have transpired at a location or to an object. Once per Session per Amp double the Skill D on any roll that might benefit from such knowledge. Duration refers to the potential depth in time reviewable by the Postcognitive. Regardless of the amount of time reviewed, the Postcognition review takes a Round. Skill rolls for assessing what is seen may require more time at the GMs discretion. Duration: 1 hour.`
},{
	name: 'Power Awareness',
	cost: '(1+)',
	description: `you can determine another’s powers and abilities if you beat their Will with your D-code. Each Success gives you one “fact” about their powers such as the nature, Amplitude, Range etc. Each attempt requires at least a Round of observation, during which you may engage in other Actions, treating Power Awareness as a separate Action. D-code: Mind or Mojo, Range: your best sensory.`
},{
	name: 'Power-asite',
	cost: '(6+)',
	description: `you can suck Power Points out of targets and grant them to yourself, adding them to any Powerks, Perks or Skills/Specializations you already possess, or take on the drained powers for yourself. The Power Point value of newly gained/augmented powers cannot exceed your own Power-asite’s Amplitude. Thus at 6 Amps, you could at most drain 6 Power Points worth of abilities from your target. You must overcome your target’s Will with your D-code, each excess point draining one Power Point and transferring it to you. 
Incomplete Amps of Powerks created by drawing Power Points away either cease functioning or continue to work as a Lesser Powerk (see Lesser Powerks) as determined by the GM. Regular Attribute pips are worth 2 Power Points each. Attributes reduced to 0 cause an automatic Comatose condition.
You may possess Power-asited Power Points for your Duration, afterwards they return to your target and your granted abilities are lost. Sacrificing a Hero Point makes the Power-asitism abilities permanent until they are dismissed by you (your target may sacrifice one of their own Hero Points to get the powers back).
You can Focus by the types of abilities sucked out of targets, or by target types, or by the ability granted to you. Other Focuses, or variations on this theme exist. They include, but are not restricted to the following:`
},{
	name: 'Power Wake',
	cost: '(1+)',
	description: `you leave a trail behind you of Powerk effect. The trail lasts for your Duration and follows the direction and length of your travel in that time. It is roughly “you” sized but may be increased by Amplifying the Power Wake’s Area, suggesting expansion or dispersal behind you. Trails of flame, sonic distortion, hardened energy walls, force fields, hallucination gas and so on are all possibilities.
The Power Wake is purchased specifically for only one Powerk at a time. If the Wake’s effects are Powerks you don’t already possess, you must purchase that Powerk along with Power Wake. Duration: 1 Round, Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Precognition',
	cost: '(5+)',
	description: `as an Action, you can see into the future. Each Amp increases the temporal distance by one Duration Scale. You start at 1 Round. This Powerk assumes an elastic future that changes with decisions made in the present. Even trivial alterations can dramatically affect the potential outcome. You decide how much fidelity there is between predicted events, and actual outcome once characters know about that particular future. 
Once per Scene per Amp, you can double the D on any Skill roll that might benefit from anticipating events. You are assumed to have the Perks “Just the Thing” and Flashback at equal Amplitude.
Note: this is a potential game-breaker, think very carefully before allowing this Powerk into your game. Duration: 1 Round. 
Psionics (see Power Set) is a catch-all ability that encompasses the myriad possibilities of powers that are attributable to Psychic abilities. It’s so common within the genre that it needs its own entry. Typical Powers might include Compulsion, Delusion, Detection, Energy Blast, ESP, Forg-editing, Precognition, Postcognition, Telekinesis, Telepathy, and many others. Your Limiting Skill could be Insight, Perception, Stamina or Will.`
},{
	name: 'Push',
	cost: '(2+)',
	description: `like a cruder version of Telekinesis (see Telekinesis) you can create a wave of force that moves, lifts or knocks over objects in its path. The force doesn’t have to be air or telekinetic in nature, it could be a barrage of small objects or a firestorm or whatever. The effect is to forcefully shove things aside. Unlike Telekinesis it cannot be used to purposefully lift or move specific objects, although they can be shoved aside or out of the way. If targets in the Push fail to resist its D-code each Round with either Might or Size, they are hurled a distance as if your Push’s D-code were used to Throw the item (as in the Throw Skill). Targets can opt to take the D-code in damage instead of being hurled aside. You may reverse the direction of your Push, turning it into a “Pull” instead. People in the trajectory of your Pushed objects pit their static defense against your D-code to avoid getting hit, taking your D-code in damage. Area: a few metres, D-code: Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Radar',
	cost: '(2+)',
	description: `you sense electromagnetic energy at a distance equal to normal human vision. Most objects distort electromagnetic fields, allowing you to see them. Intense electrical and magnetic interference can “blind” you, disabling your Radar for 1D Rounds (treat as a Complication). This Powerk automatically provides 360° Radar sensing, thus you benefit from an equal Amplitude of the Powerk 360° Sensing. Once per Scene per Amp double the D of any Skill rolls that might benefit from being able to see in the EM spectrum. Area: normal human visual range, or yours, whichever is better.  `
},{
	name: 'Rapid Fire',
	cost: '(2+)',
	description: `your attack can fire off multiple shots in an Action, or hose down an Area just as if it were a fully automatic assault weapon (see Combat: Burst Fire below). It must be purchased separately for each attack it applies to. Literally, it turns an attack into a Burst of Attacks. 
Each Amp allows another attack per Action. Each additional attack adds a +1 to the attack roll and damage/effect roll. The maximum bonus to each cannot exceed the static Skill of the attack or the damage/effect roll respectively. 
Against multiple targets, subtract one from this bonus for each additional target beyond the first, and only roll once for attack and damage/effect, applying the results equally. Alternately, if hosing down an Area, each Area Scale increment beyond the target subtracts its Area D-code from this bonus, but everyone in that Area is affected equally. The number of targets affected cannot exceed the number of shots fired. Ignore Multiple Action penalties for attacks in the Burst, they count as a single Action. D-code: +1/Amp, Limit: Arcane, Attacking Skill (not Specialization), Science, Stamina, Technology or Will. `
},{
	name: 'Radio',
	cost: '(1+)',
	description: `you can listen in or communicate by radio at a Range of 100km. You can jam all radio signals within 10m. Once per Scene per Amp, double D any Skill rolls that might benefit. For contests requiring D-codes, use Tech, Science or Will Skill. Area: (communicate) 100km, (jam) 10m`
},{
	name: 'Reach',
	cost: '(1+)',
	description: `your physical reach is a few metres. You could have super long arms, telescoping limbs or be stretchy or some other ability. Double the dice of any Skill roll that benefits from this once per Scene per Amp. Range: 1D metres, Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Ready',
	cost: '(5+)',
	description: `this Powerk allows you to prepare a Powerk’s Action in advance, allowing it to discharge automatically when conditions that you’ve pre-programmed are met. For example, you could prepare an Explosion when Dr. So-And-So enters the room, or you could walk into a confrontation with a couple of prepared “Readies” waiting, such as “Force Field up when the shooting starts, and Teleport me to the Migh-T-Mobile if I am Incapacitated or worse.” The latter would be an example of two Readies.
A Ready requires no Actions to discharge, but does require an Action to create and cancel, and can be cancelled at any time. Each Ready vanishes at the end of its Duration, but a Ready can be made permanent by expending a Hero Point. Such permanent Readies regenerate once per Duration. 
A Ready will only discharge a single Action. Complex Readies may involve more than one Amp. The maximum number of Actions available to you in a complex Ready is equal to your Amplitude. Thus, a three Action Ready would require three Amps. Readies discharge on your Initiative rank.
A Ready can be planted at a location or attached directly to you or someone else. Subjects unwilling to have a Ready attached to them may need to be Targeted. They can resist your D-code with their Will. Focus by individual Powerks are considered 3rd degree. Once per Amp per Session. D-code: Mind or Mojo, Duration: Scene, Limit: Mind or Mojo.`
},{
	name: 'Regeneration',
	cost: '(3+)',
	description: `you heal one injury level per Amp per hour. Regeneration requires no Actions. You may only Regenerate from death with the expenditure of a Hero Point to reduce your Injury level to Mortally Wounded. From there you can Regenerate normally. Higher Amplitude means a greater number of Wounds Regenerated per hour. `
},{
	name: 'Reincarnation',
	cost: '(6+)',
	description: `you can summon the psyche of someone dead and place it into a host object or person. If the host is unwilling it must resist your D-code with its Will. If the psyche is unwilling you must overcome its Will with your D-code. If the psyche is unknown to you or hostile, add up to +15 to its resistance to being Reincarnated.
If you are successful, the invading psyche will control the host and be able to use any abilities attributable to the host’s physical form. The host’s knowledge and memories are not accessible to the invading psyche, unless it has ESP.
If invading an already dead body, the Reincarnated is Undead as the Powerk. If invading a mechanical body, it is a Robot as the Powerk. Sacrificing a Hero Point makes the Reincarnation Permanent, until Exorcised or the host spends a Hero Point to resist. D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech, or Will.`
},{
	name: 'Repair',
	cost: '(1+)',
	description: `once per Session you can reduce damage to an object by one step, but not if it’s been Destroyed. Range: Contact`
},{
	name: 'Resurrect',
	cost: '(6+)',
	description: `you can bring someone back from Death, for your Duration. They must not have been dead longer than your Duration. They are completely cured of the injuries that killed them. You can make this permanent by spending a Hero Point. Duration: Scene, Range: Contact. Limit: Arcane, Science, Stamina, Tech, or Will.`
},{
	name: 'RetCon',
	cost: '(6+)',
	description: `once per Amp per Session, you can go back in time. When you go back, you find yourself exactly where you were in both time and space, and in exactly the same condition. Alternately you go backward in time to where you are spatially in the present. Your choice. You may bring your static D-code in Size with you. Unwilling targets resist your D-code with their Will. You can go back one Round. You are assumed to have one Amp of Just the Thing or Flashback for each Amp of RetCon.
This Powerk could create temporal paradox (two or more of you’s simultaneously existing in the past) which may or may not be catastrophic. GMs call. Area: Self/Contact, D-code: Mind or Mojo, Range: (temporal) 1 Round, (spatial) Self/Contact.
Seeking (Powerk Base Cost+) for any Powerk used as an attack, it allows an automatic retry on a miss, the following Round. The attack circles back for another attempt. The retry does not count as an Action by the attacker but uses the attacker’s Skill at -1D. The number of possible retries per attack equals your Seeking Amplitude, each retry suffers a cumulative -1D. Retries cease when they hit. Seeking is specific to a Powerk and must be bought specifically for it.`
},{
	name: 'Selective',
	cost: '(1+)',
	description: `you may opt to include or exclude one target/subject per Amp, or one Area Scale within a larger Area of effect of a specified Powerk. Each Selective is purchased separately for each Powerk it applies to, Amplitude determines the number of specific targets you can include or exclude, or the Scale of the Area to be excluded from within a larger Area.`
},{
	name: 'Shape',
	cost: '(4+)',
	description: `you can change the shape of matter/energy, but not its composition. Shaping non-sentient matter requires overcoming the object’s Structure with your D-code. Shaping sentient matter requires overcoming the best of its Soak or Will. Unless the Shaped object was already mobile, your Shape doesn’t move around, nor does it have intent or take independent Actions.
You can use Shape to simulate other Powerks, as a Flex Powerk. The Power Point value of your Shaped Powerk can be no greater than your Shape Amplitude. The Shape cannot have abilities that aren’t reasonable given the composition of that Shape. Shaping matter can be used as an attack, substituting your D-code as damage (spikes of stone or ice, flares of fire, crashing tidal waves and so on). It can also be used to shield you or provide cover, such a barrier would have a Structure equal to your static D-code. Both attacks and defenses require an additional Action to create the required Shapes.
Shaped objects retain their new form unless re-Shaped back to their original form somehow, unless they are elastic or able to reshape themselves naturally. Area: 1D metres, D-code: best of Mind or Mojo, Range: Contact. Limit: Arcane, Science, Stamina, Technology or Will.`
},{
	name: 'Shield',
	cost: '(1+)',
	description: `you have a physical shield you can Parry with using Parry rules (See Melee Skill). Like regular shields it adds its bonus to your Soak, and your static Parry, while you carry it. Its bonus is also added to your Might to determine damage when the Shield is used either as a Melee or Thrown weapon (lookin’ at you Cap). Each Amp increases this bonus by 1. You may use the Shield as cover equal to its value, adding its value to your Dodge if hiding behind it. You can sacrifice your Shield instead of taking damage on a missed Parry/Block. The Shield takes the damage upon itself using twice its Amplitude as Structure. Indestructible Shields, or Shields that take no damage from a sacrifice are knocked aside and require a dedicated Action to righting it before it can be used again. If your Shield is lost, damaged or destroyed, it can be replaced by spending a Hero Point and providing an acceptable rationale for its return. It is always a Vulnerable Item.
Shields Parry at -10 against ranged attacks.
Damage exceeding the Shield’s destruction is inflicted on to the bearer of the Shield.
Shield lets you Link other Perks or Powerks to it without extra cost. Once per Session per Amp you may double any Skill rolls using your Shield. Limit: Arcane, Melee, Science, Stamina, Technology or Will. `
},{
	name: 'Shockwave',
	cost: '(5+)',
	description: `you can create a radiating tremor of force that propagates through solid, liquid or gaseous matter. The power of that force equals your D-code. Once per Round, anyone within the area of the Shockwave must resist your D-code with their Might or be thrown in a random direction as if your D-code was the Might throwing them (see Throw Skill). Objects of smaller Size than your D-code are automatically thrown. Targets not thrown take your D-code in damage. 
Stationary objects (buildings, cars, boats etc.) in contact with the Shockwaved surface take double your D-code in damage as they topple and crumble. You may direct a Shockwave by Amplifying its Range, in which case it acts as a ranged attack with an Area effect, requiring a Skill roll to hit your target. Area: 10m, D-code: Mind or Mojo, Duration: 1 Round, Range: contact. Limit: Arcane, Science, Stamina, Technology or Will.`
},{
	name: 'Signature Item',
	cost: '(1)',
	description: `you have an object that helps define your Hero. Examples include Thor’s Hammer, Captain America’s Shield, Wonder Woman’s Lasso. Once per Session you can double a Skill roll made with your item.
You can Link Perks and Powerks to your Item at no additional cost. Your Item is always Vulnerable as a Complication. Destroyed or lost Items can be replaced with a Hero Point and a decent rationale as to how you came upon another one. `
},{
	name: 'Skill Exchange',
	cost: '(4+)',
	description: `you can download new Skills or upgrade the ones you have. Maybe you have a cybernetic brain with extra capacity, maybe you have access to the wisdom of your ancestors. Each Amp lets you add 1 Power Point worth of Skill or Specialization (+1D to any Skill, or +3D to any Specialization) once per Session per Amp. The usual limits to Skill levels apply; no Skill greater than twice the D in the parent Attribute, and no Specialization greater than twice the D in the parent Skill. After your Duration, the Skill increase vanishes. A third-degree focus would be a specified Skill of Specialization. Whoa, I know Kung Fu! D-code: 1D Skill/3D Specialization, Duration: Scene. Limit: Mind or Mojo. `
},{
	name: 'Slow',
	cost: '(3+)',
	description: `your attack causes your target to slow down. Pit your D-code against the target’s Will or Stamina (chosen at purchase), each Success reduces their Moves by 1D and Velocity by one Scale. A Moves or a Velocity of 0 means the target is Paralyzed. Successive attack results stack with previous Slow effects. D-code: Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Technology or Will.`
},{
	name: 'Snare',
	cost: '(3+)',
	description: `your attack inflicts the Immobilized condition on your target if your D-code overcomes their Might. Your Snare can be physically broken, its Structure equal to its static D-code. Like a ranged Grapple attack, your Snare can inflict Grapple Maneuvers (like Bind, Disarm or Choke; see Brawl Skill) using your attacking Skill roll. Use your D-code in lieu of Grapple “damage” to determine Maneuver effects. D-code: 4D, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Sonar',
	cost: '(2+)',
	description: `you can see using sound, at a distance equal to normal human vision. Sonar picks up shapes, texture and movement but doesn’t discern color or light. Sonar is unavailable in the vacuum of space, and reduced in environments not conducive to conducting sound, or where there is sufficient interference (the rain, a snowstorm, a rock concert etc.) This Powerk automatically provides 360° Sonar sensing, you have 360° Sensing at equal Amplitude. Once per Scene per Amp double the D on any Skill roll where Sonar might prove beneficial. Range: normal human vision, or yours, whichever is better.  
Splatter (1+, plus base cost of Splattered effect) whenever you take an Injury, your blood/secretions/bits fly all over the place and land on those around you (hopefully your opponents). Your Splatter is automatically Linked to other Powerks; Affliction, Contagion, Corrosive, Paralyze, Toxin etc., which must be purchased along with Splatter, unless you already possess those Powerks.
Targets of your Splatter get hit if their static defense is exceeded by the damage rolled against you. Reduce your target’s static defenses by your Area’s static D-code (see Scale Tables). Area: A few metres. Limit: Mind or Mojo`
},{
	name: 'Stasis',
	cost: '(6+)',
	description: `Once per Scene per Amp, you can lock someone/thing in time, such that their movement, thought and metabolic processes essentially freeze (or moves glacially slowly) for the Duration. To them the world suddenly changes, moved forward in time by your Duration. Such a state may be advantageous to them as well. All biological processes also slow down, including the effects of injury and death. While in Stasis you cannot die. Also, while in Stasis you cannot be affected by anything not in Stasis with you. To the outside world you are an inert, indestructible, statue. You can however be moved around. Unwilling targets may resist your Stasis D-code with their Will. D-code: Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Perception, Science, Stamina, Technology or Will.`
},{
	name: 'Stop Time',
	cost: '(6+)',
	description: `you can stop the flow of time around you, once per Scene per Amp. For the Duration, everything just grinds to a halt (or at least to a very slow, nearly imperceptible crawl) around you. To others you seem to vanish and reappear somewhere else. People who have Mighty Speed can perceive you and interact with you normally while they are in Burst of Action mode (see Mighty Speed).
Your inherent atomic and subatomic interactions still occur. Thus, you can still breathe and draw sustenance from matter, be burned or electrocuted, but you can’t change the physical state of anything external to you (break anything, hurt anyone etc.). All such efforts will be confounded by the slow progress of time around you. Objects and people will seem like indestructible statues. 
Things can be shifted in space and moved around however, so you can open doors, and take things out of people’s hands, but you won’t be able to walk on water or fly on air molecules that don’t get out of your way. Objects already in motion, before you moved them in Stop Time, will continue along any new trajectory you set, at the same energy, velocity and inertia, at the end of your Stop Time.
You can bring as much matter with you into Stopped Time as your static D-code in Size or as much as will fit within your Area. Unwilling targets must defeat your D-code with their Will. Area: Self, D-code: Mind or Mojo, Duration: 1 Round. Limit: Arcane, Perception, Science, Stamina, Technology or Will.`
},{
	name: 'Stun',
	cost: '(4+)',
	description: `you have a Ranged attack that inflicts 4D Knock-Out damage. D-code vs target Stamina or Will (chosen at purchase). D-code: 4D, Duration: as per Knock-Out rules, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Summon',
	cost: '(5+)',
	description: `teleport things to you, but only if they are within your Range. Unlike Teleport, you may teleport objects/people to you without a sensory link or exact knowledge of their whereabouts. The specified target need only be somewhere within your Area. You may Summon as much Size as your static D-code. Items with Will may resist your D-code if they do not wish to be Summoned.
A Summon attack is possible, and functions like a Teleport attack. An Action is required to focus on the target and another to execute the attack. A Target Skill roll is required, damage is equal to your D-code, and non-inherent damage reduction (Force Fields, Shields, Armor etc.) does not reduce this damage. Presumably you are Summoning bits of people’s insides out. Gross.  Area: 100m, D-code: Mind or Mojo. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Swap Psyches',
	cost: '(4+)',
	description: `you can transplant someone’s consciousness/soul into your body while they occupy yours. Involuntary targets can resist your D-code with their Will. All knowledge, memories, Mojo and Mind Attributes and all Skills are transferred. All Powerks not deemed Mind or Mojo related stay with the host body. Sacrificing a Hero Point makes the Swap permanent until Exorcised, at which point both psyches return to their respective bodies, regardless of distance. D-code: Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Swing',
	cost: '(1+)',
	description: `you can Swing from a line up to 10 m in a single Action, only if there is something above you that provides an anchor point for your line. You need not make any Athletics rolls to do this. Once per Scene per Amp, you can perform a Swing attack which adds +1D per Amp to any Brawl or Melee damage, provided you are still hooked up to your line and take an Action to Swing. Once per Scene per Amp you may double your Dodge while Swinging in the same Round. This too requires an additional Action. If your Swing Range exceeds your normal travelling Velocity, you may substitute it for your Swing Range instead, as long as there is something to Swing from. Range: 10 m. Limit: Moves.`
},{
	name: 'Telekinesis',
	cost: '(3+)',
	description: `you can move stuff with a thought. Treat your D-code as the static Might against the target’s Size to determine if you can heft an object. For objects of greater Size than your Telekinesis static D-code, use your Telekinesis D-code as your Brawn Skill (see Brawn Skill). 
Telekinesis lets you to simulate other suitable Powerks such as X Blast (Telekinesis), Flight, Levitate, Force Field and so on, at a Power Point value equal to your Amplitude, as a Flex Powerk. 
As an offense maneuver, you can pick people up (they resist with their Might) and drop them, or you can drop stuff on them using Target Skill. You can also Throw stuff, using Throw rules. Picking something up requires an Action, in addition to dropping, throwing or otherwise attacking with the object.
Crushing or breaking something requires one Action to target the item, and damage it on the following Action. Damage would equal your D-code.
Manipulating and Throwing objects requires the appropriate Skills with a penalty equal to your Distance Scale away from the Telekinesed object. Simultaneous Telekinesis against more than one object creates a -1D penalty per additional object, and counts as an extra Action, adding to Multiple Action penalties as well.
However, you can pick up and launch a group of items, like a collection of kitchen knives, or a pile of broken glass and so on, as long as it occupies the same amount of Area as a normal person. Beyond that requires purchase of an Area parameter to affect all the objects in a given Area. D-code: best of Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Telepathic Link',
	cost: '(1)',
	description: `you have a permanent link with another, who must be specified at purchase. Your Range is the sum of yours and their Mojo D in Distance scale.`
},{
	name: 'Telepathy',
	cost: '(1+)',
	description: `you can communicate with others (even if they are not telepathic) using your mind. Each Amp lets you double the number of collocutors, thus you can set up conference calls. Someone can try to “jam” you by overcoming your Telepathy D-code with theirs. D-code: Mind or Mojo, Range: 10m`
},{
	name: 'TelePortal',
	cost: '(5+)',
	description: `you can create a door to another place within your current dimension, up to a few metres in Area. Your Range for destination is 10m, as is the distance away that you can create the Portal. Anything that can fit through the TelePortal can be transported, regardless of mass. The TelePortal stays active for up to 1 Round. You must be suitably familiar with or have sensory contact with your destination.
You can use TelePortal defensively to redirect attacks through it and away from yourself. As an Action, you may Parry with a Teleportal (an Area of a few metres would give you a +5 bonus). As a second Action, you may redirect that attack against something else with a successful Target roll.
Thus, say you were attacked by a shotgun, you could parry using your Teleportal, sending the blast wherever the Teleportal exits. If the Teleportal exits beside your attacker, she will effectively shoot herself. Parry using Portal would require an Action and use your Target Skill instead of Melee. Missing the Parry wouldn’t give you the option of sacrificing the Parrying object instead of taking damage to yourself (see Combat below).
Closing a TelePortal on something part way through inflicts your D-code in damage on them, and you get to decide which side of the Portal the remainder goes if you overcome the target’s Will or Size (non-sentient objects) with your D-code roll. Dead or destroyed targets are simply bisected. This requires an extra Action to create the Portal and another to Target the Portal around your opponent. Area: 1D metres, D-code: best of Mind or Mojo, Duration: 1 Round, Range: 10m. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Teleportation',
	cost: '(5+)',
	description: `you can disappear and re-appear somewhere else. You can do this to other people and objects as well. You must have a sensory connection to your destination or be suitably familiar with it. You can Teleport Size of up to your static D-code. If your own body exceeds that Size, you can still Teleport yourself, but nothing else.
Your starting destination Range is 10m, this is also your targeting Range to Teleport something else. Unwilling targets may resist your D-code with their Will. Teleportation Focuses by destination and Teleport subject. For example, being able to Teleport yourself only or Teleport others only would constitute a first-degree Focus.
Teleporting things into other things (or out of other things) inflicts your D-code on them. Armor and other external, non-inherent protections (like Force Field) do not reduce this damage. This attack requires an extra Action to Target the opponent. D-code: best of Mind or Mojo. Range: 10m Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Torpor',
	cost: '(1+)',
	description: `you can enter a state of suspended animation, slowing your metabolic functions to near death. This limits the effects of otherwise lethal conditions such as asphyxia, disease, poison, hypothermia, thirst, starvation and allows you to defer any Mortally Wounded dying rolls until your Torpor has ended. Only a Medicine or similar roll against a TN of 30 can detect that you are still alive.
You may awaken at any time and are aware of your surroundings while in Torpor. As a Complication, you may be unaware of events during your Torpor, so the conditions or timing of your awakening must be stated prior to entering Torpor. Your Torpor lasts no longer than your Duration. Duration: 1 Day`
},{
	name: 'Tracking',
	cost: '(1+)',
	description: `once you’ve marked an object or target in your Range, you are aware of its location anywhere within your Area. To mark an object you must successfully Target it using the Skill of the same name. You may Track as many objects as you have Amplitude. Someone trying to evade your Tracking must use an appropriate Skill (Arcana, Stealth, Technology) against your own D-code plus Perception Skill. A Tracked object may be targeted if within range of an attack, even if they cannot be otherwise sensed by you. Thus, you may attack a Tracked target, even if you can’t “see” it. Area: 1 km, D-code: Mind or Mojo, Duration: Scene, Range: 10m`
},{
	name: 'Transfer Psyche',
	cost: '(4+)',
	description: `you can move the consciousness/soul of someone into another body, leaving its previous form comatose. All knowledge, memories, Mojo and Mind Attributes and all Skills are transferred. All Powerks not deemed Mind or Mojo related stay with the host body. Involuntary targets can resist your D-code with their Will. If the host form already has a consciousness, you must either remove it or conquer it by overcoming its Will with your D-code before the host can accept a new consciousness. A successfully Exorcised psyche is expelled, either to automatically return to its previous form, or to remain a free floating “spirit” if no such vessel is available. 
Such spirits will be reabsorbed into the Cosmos if unattached to a suitable vessel by the end of the Duration or unless able to sustain themselves in some other way. Sacrificing a Hero Point makes the Transfer permanent until Exorcised. Psyches transferred to dead bodies are Undead, to mechanical bodies are Robots (see their respective Perks). D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Arcane, Science, Stamina, Tech, or Will.`
},{
	name: 'True Sense',
	cost: '(4+)',
	description: `you perceive the true “state of things”. Add your D-code to attempts to see through Illusions and Delusions, Invisibility or Obscuration, as well as Deceptions, lies, misunderstandings and finding items intentionally hidden from you. You can also add it to your Intuition to discern someone’s true intentions. D-code: Mind or Mojo, Range: normal human vision, or yours, whichever is better.  `
},{
	name: 'Ultra-Vision',
	cost: '(1+)',
	description: `you can see in the Ultra-violet spectrum, allowing you to discern patterns of energy and radiation and so on. Once per Scene per Amp, double the D of any Skill roll that would benefit from UV vision. Range: normal human vision, or yours, whichever is better.  `
},{
	name: 'Vortex',
	cost: '(5+)',
	description: `you can create a swirling maelstrom of force, energy, objects or whatever (your X if you have one). Each Round, anything within its Area is swept aside or knocked down if it fails to resist your D-code with their Might or Size. Those that fail, or objects with a Size smaller than your static D-code are thrown in a random direction as if by a Might equal to your D-code. Otherwise they must take your D-code in damage. 
You can place your Vortex anywhere within your Range, and it either follows you or can be moved at its Range rating in Velocity. If you create multiple simultaneous Vortices, each has a -1D penalty to D-code for everyone beyond the first.
You can use your Vortex like a Force Field (see Force Field) but only against physical attacks likely to be affected by it, for example wind might knock aside bullets but will not be any good against a psychic Stun attack. GM’s call on that. Vortex gets damaged using its static D-code as Structure. Destroyed Vortices are unavailable until next Scene.
You may produce as many Vortices as your Amplitude per Scene. Area: 1D metres, D-code: Mind or Mojo, Duration: 1 Round, Range: 10m Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'Wall Walking',
	cost: '(1)',
	description: `you can cling to vertical or upside-down surfaces which would normally be unclimbable. You can carry anything you’d normally be able to carry on the ground, at your regular ground Velocity. Frictionless or slippery surfaces may require an Athletics roll, TN to be determined by the GM.`
},{
	name: 'Water Walking',
	cost: '(1)',
	description: `you can walk across water, liquid or any other viscous, non-gaseous, surface that normally wouldn’t support your weight. Your Velocity is whatever your regular Velocity is. You may carry whatever you would normally be able to carry on land.`
},{
	name: 'Weakness Awareness',
	cost: '(1+)',
	description: `by spending a Round observing your opponent you may roll your
Perception against their Will. Each Success tells you one fact about their weaknesses or will reveal one of their Complications (if any). Against objects, if you overcome its Structure with your Will you may double your damage against it, once per Session per Amp.`
},{
	name: 'Will Blast',
	cost: '(5+)',
	description: `you inflict damage against a subject’s psyche, intellect or soul. You match your D-code against the target’s static Will, not Soak, success resulting in Injury. The injury can take the form of bodily harm, or, psychic injury with death resulting in a complete evacuation of the soul/psyche/consciousness from the body. D-code: 4D, Range: 10m Limit: Mind or Mojo.`
},{
	name: 'Will Soak',
	cost: '(1+)',
	description: `it’s like Soak for your brain/psyche/soul. Each Amp adds +4 to your resistance checks against attacks resisted by Will. Limit: Mind or Mojo.`
},{
	name: 'Will Stun',
	cost: '(4+)',
	description: `you inflict KnockOut damage using your Powerk against your opponent’s Will. Each Success inflicts a level of KnockOut. D-code: 4D, Range 10m Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'Wings',
	cost: '(2+)',
	description: `you can fly at 10’s of metres per Round (+2D Velocity). The downside is that you’ve got two appendages on your back (or feet or forehead) that others do not. This automatically gives you the SuperFreak Complication. If the Wings are not always there, then they must be Activated as a Complication. You may carry up to half your static Might while flying with Wings.
You must decide if your wings are inherent (a part of you) or separate. If your Wings are inherent they may be used to Brawl and Block, using your own Might as damage. A Grievous Wound can be applied to your Wings if used to Block and can impact your flying ability. 
If your Wings are extrinsic, then you may use Melee and Parry in combat, with your Might as the damage. If sacrificed on a Parry, your Wings have a Structure equal to your Wing’s Power Point Cost x 2, plus any Mighty Soak, Armor, Force Fields etc. that the GM feels is applicable. Destroyed external Wings return by expending a Hero Point and having a plausible rationale. Velocity: 10’s m/Round (+2D), Limit: Moves or Mojo.`
},{
	name: 'X-Aura',
	cost: '(5+)',
	description: `you radiate X around you, at an Area of up to a few metres. Anything within your Aura must resist against your D-code or be Injured or some other effect appropriate to your X (Blast, Stunned, Toxin etc. or some other power effect of equal Power Point value, you must choose at purchase).
Your Aura increases your Soak and all static defenses by its Amplitude. As a Flex Powerk you can exhibit other suitable Powerks depending on the nature of your X, up to a Power Point value equal to your Amplitude.  Examples might include Body Weapon, Negate, Obscure and so on. GM approval is required.
If your Aura is permanent you must take the SuperFreak Complication, if it isn’t you must take the Activate (“Flame on!”) Complication. Area: 1D metres, D-code: Mind or Mojo Limit: Arcane, Science, Stamina, Tech or Will`
},{
	name: 'X-Blast',
	cost: '(5+)',
	description: `you shoot bolts or beams of X at your target inflicting 4D damage at a Range of 10m. Identical to Energy Blast in Mini Six Bare Bones but you must specify the medium of your Blast, along with its Look or Complications. Alternately you can simply call it Energy Blast, firing an unspecified type of comic book energy (muon particles or zero-point radiation etc.). D-code: 4D, Range: 10m Limit: Best Attribute.`
},{
	name: 'X-Clad',
	cost: '(4+)',
	description: `you are covered in a sheath of X. Its Amplitude adds to your Soak (treat as Armor). If not entirely covered in X, reduce X-Clad’s protective benefits following the armor coverage rules (see Combat; Armor). If your X-Clad covering becomes damaged or destroyed, it returns the following Scene.
You also have the Powerks Body Weapon and Echinate at the same Amplitude. As a Flex Powerk you can exhibit other suitable Powerks depending on the nature of your X, up to a Power Point value equal to your Amplitude.  GM approval is required.
If your X-Clad is permanent you must take the SuperFreak Complication, if it isn’t you must take the Activate Complication. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'X-Composed',
	cost: '(6+)',
	description: `your body is composed entirely of X. You will automatically have the same advantages as X-Clad at the same Amplitude. If your X isn’t solid, then you will have either Incorporeal, Intangible, or one of the Non-Solids at equivalent Amplitude instead of the benefits to your Soak. Your choice will correspond to the properties of your X.
While X-Composed, you have no need of food, drink or respiration and are totally immune to poisons and diseases, unless such forces would normally affect your X. There may be limitations on this depending on the nature of your X and at the discretion of the GM. For example, a hero made of stone may not need any of the aforementioned requirements, but a being of wood might still need to breathe and consume water, a being of fire may need oxygen. These could be treated as Requirement or Missing Effect Complications when they pose a problem.
If your X-Composition is permanent you must take the SuperFreak Complication, otherwise you must take the Activate Complication. Limit: Arcane, Science, Stamina, Tech or Will.`
},{
	name: 'X-Construct',
	cost: '(5+)',
	description: `you can create things (like the Creation Powerk), but only out of your X. You may create simple shapes like domes and barriers, and they will have a Structure equal to your static D-code and must fit into your Area. The Construct may be a tool, weapon, vehicle, paperweight etc. but anything that confers Powerk effects is limited to a Power Point value no greater than your Amplitude, as a Flex Powerk. If used as a weapon, your Construct will inflict its D-code in damage (not D-code plus Might however).
Constructs have the same Complications as your X, and the GM can disallow any Constructs that are inappropriate given the nature of your X. Area: 10 metres, D-code: Mind or Mojo, Duration: Scene, Range: 10m. Limit: Mind or Mojo.
X-Control (see Power Set) you can bend X to your whim. X-Control operates as a Power Set, restricted only to the properties of X and your imagination.`
},{
	name: 'X-Pervious',
	cost: '(1)',
	description: `you are resistant to your X, or anything reasonably similar to it. Double any Soak or resistance dice against such attacks. You must have an X-Power to be X-Pervious.`
},{
	name: 'X-Sense',
	cost: '(1+)',
	description: `if applicable, you can sense using your X as the medium of perception. What you can perceive is at the discretion of the GM and depends on what X is. Your Range is normal human sight (lets say 100m), added Amps upscale this distance. Once per Scene per Amp you may double the dice of any roll that would benefit from this perception.`
}]