function Powerk() {
	const self          = this;
	self.amps           = ko.observable(1);
	self.selectedPowerk = ko.observable({});
	self.powerkName     = ko.computed(() => _.get(self.selectedPowerk(), 'name', ''));
	self.cost           = ko.computed(() => _.get(self.selectedPowerk(), 'cost', '(0)'));
	self.description    = ko.computed(() => _.get(self.selectedPowerk(), 'description'));
	self.limit          = ko.computed(() => _.get(self.selectedPowerk(), 'limit'));

	self.ampable      = ko.computed(() => _.indexOf(_.get(self.selectedPowerk(), 'cost'), '+') >= 0);
	self.baseCost     = ko.computed(() => parseInt(_.get(self.selectedPowerk(), 'cost', '(0)').substring(1)));
	self.powerPoints  = ko.computed(() => {
		console.log(self.baseCost());
		console.log(self.amps());
		return self.baseCost() + parseInt(self.amps()) - 1
	});

	self.displayText = ko.computed(() => `${self.powerkName()} ${self.cost()} ${self.amps()}`);

	self.increaseAmps = function() {
		self.amps(self.amps() + 1);
	}

	self.decreaseAmps = function() {
		self.amps(self.amps() - 1);
	}
}

function Perk() {
	const self        = this;
	self.amps         = ko.observable(1);
	self.selectedPerk = ko.observable({});
	self.perkName     = ko.computed(() => _.get(self.selectedPerk(), 'name', ''));
	self.cost         = ko.computed(() => _.get(self.selectedPerk(), 'cost', '(0)'));
	self.description  = ko.computed(() => _.get(self.selectedPerk(), 'description'));
	self.limit        = ko.computed(() => _.get(self.selectedPerk(), 'limit'));

	self.ampable      = ko.computed(() => _.indexOf(_.get(self.selectedPerk(), 'cost'), '+') >= 0);
	self.baseCost     = ko.computed(() => parseInt(_.get(self.selectedPerk(), 'cost', '(0)').substring(1)));
	self.powerPoints  = ko.computed(() => {
		console.log(self.baseCost());
		console.log(self.amps());
		return self.baseCost() + parseInt(self.amps()) - 1
	});

	self.displayText = ko.computed(() => `${self.perkName()} ${self.cost()} ${self.amps()}`);

	self.increaseAmps = function() {
		self.amps(self.amps() + 1);
	}

	self.decreaseAmps = function() {
		self.amps(self.amps() - 1);
	}
}

function Specialization(name, points, parentSkill) {
	const self = this;

	self.specializationName = ko.observable(name);
	self.points             = ko.observable(points);
	self.parentSkill        = parentSkill;

	self.increasePoints = function() {
		self.points(self.points() + 1);
	}

	self.decreasePoints = function() {
		self.points(self.points() - 1);
	}

	self.dCodeText          = ko.computed(() => {
		const attrPoints = parseInt(self.parentSkill.parentAttr.points());
		const skillPoints = parseInt(self.parentSkill.points());
		return pipsToDCode(attrPoints / 2 + skillPoints * 3 + self.points() * 3);
	})
}

function Skill(name, points, parentAttr) {
	const self = this;

	self.skillName       = ko.observable(name);
	self.parentAttr      = parentAttr;
	self.specializations = ko.observableArray([])

	self.limit = ko.computed(() => {
		console.log(typeof self.parentAttr.points());
		return self.parentAttr.points() / 6;
	})

	self.points = ko.observable(points).extend({
		validation: {
            validator: customMax,
            message:   function () { return 'The maximum allowed is ' + self.limit(); },
            params:    self.limit,
        }});

	self.totalPoints = ko.computed(() => {
		return _.sum(_.map(self.specializations(), sp => parseInt(sp.points()))) / 3 + parseInt(self.points())
	})

	self.addNewSpecialization = function() {
		self.specializations.push(new Specialization('', 0, self))
	}

	self.increasePoints = function() {
		self.points(self.points() + 1);
	}

	self.decreasePoints = function() {
		self.points(self.points() - 1);
	}

	self.dCodeText = ko.computed(() => {
		const attrPoints = parseInt(self.parentAttr.points());
		return pipsToDCode(attrPoints / 2 + parseInt(self.points()) * 3);
	})
}

function BaseAttribute(name, points, skillList) {
	const self = this;

	self.attributeName = name;
	self.points        = ko.observable(points);
	self.skills        = ko.observableArray([])
	self.totalPoints   = ko.computed(() => {
		self.points;
		self.skills;
		return _.sum(_.map(self.skills(), sk => sk.totalPoints())) + parseInt(self.points())
	})

	self.skillList = ko.observableArray(skillList);

	self.addNewSkill = function() {
		self.skills.push(new Skill('', 0, self))
	}

	self.increasePoints = function() {
		self.points(self.points() + 2);
	}

	self.decreasePoints = function() {
		self.points(self.points() - 2);
	}

	self.dCodeText = ko.computed(() => {
		return pipsToDCode(self.points() / 2);
	})
}

function CharacterViewModel() {
	const self = this;

	self.powerPoints      = ko.observable(20);
	self.characterName    = ko.observable("Test Hero");
	self.attributeSelloff = ko.observable(0);
	self.perks            = ko.observableArray([]);
	self.powerks          = ko.observableArray([]);
	self.allPerks         = ko.observableArray(PERKS);
	self.allPowerks       = ko.observableArray(POWERKS);
	
	self.baseAttributes   = ko.observableArray([
		new BaseAttribute('Might', 18, MIGHT_SKILLS),
		new BaseAttribute('Moves', 18, MOVES_SKILLS),
		new BaseAttribute('Mind', 18, MIND_SKILLS),
		new BaseAttribute('Mojo', 18, MOJO_SKILLS),
	])

	self.totalPoints = ko.computed(() => {
		self.baseAttributes;
		self.perks;
		self.powerks;
		let totalPoints = _.sum(_.map(self.baseAttributes(), attr => attr.totalPoints()));
		totalPoints += _.sum(_.map(self.perks(), perk => perk.powerPoints()));
		totalPoints += _.sum(_.map(self.powerks(), powerk => powerk.powerPoints()));
		return totalPoints - 72 - self.attributeSelloff();
	})

	self.addPerk = function() {
		self.perks.push(new Perk())
	}

	self.addPowerk = function() {
		self.powerks.push(new Powerk())
	}
}

var customMax = function(val, max) {
    return val <= max;
};

function pipsToDCode(pips) {
	const remainder = pips % 3;
	const dCode     = (pips - remainder) / 3
	return `${dCode}D${remainder ? ` + ${remainder}` : ''}`
}

ko.validation.init();
ko.applyBindings(new CharacterViewModel())
