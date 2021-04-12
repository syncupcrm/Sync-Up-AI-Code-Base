(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "2iIw":
/*!**********************************************************************************!*\
  !*** ./src/app/predict/component/predict-home-nav/predict-home-nav.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PredictHomeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictHomeNavComponent", function() { return PredictHomeNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PredictHomeNavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
}
PredictHomeNavComponent.ɵfac = function PredictHomeNavComponent_Factory(t) { return new (t || PredictHomeNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PredictHomeNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictHomeNavComponent, selectors: [["app-predict-home-nav"]], decls: 7, vars: 0, consts: [[1, "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "col-1", "pt-3"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-10", "text-center"], ["id", "img20", "src", "../../../../assets/img/Img20.png"], [1, "col-1"]], template: function PredictHomeNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictHomeNavComponent_Template_img_click_2_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVkaWN0LWhvbWUtbmF2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "8m46":
/*!************************************************************************!*\
  !*** ./src/app/predict/component/predict-nav/predict-nav.component.ts ***!
  \************************************************************************/
/*! exports provided: PredictNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictNavComponent", function() { return PredictNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PredictNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
PredictNavComponent.ɵfac = function PredictNavComponent_Factory(t) { return new (t || PredictNavComponent)(); };
PredictNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictNavComponent, selectors: [["app-predict-nav"]], decls: 2, vars: 0, template: function PredictNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "predict-nav works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVkaWN0LW5hdi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "DdOR":
/*!********************************************************************************************!*\
  !*** ./src/app/predict/component/predict-character-nav/predict-character-nav.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PredictCharacterNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictCharacterNavComponent", function() { return PredictCharacterNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PredictCharacterNavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
}
PredictCharacterNavComponent.ɵfac = function PredictCharacterNavComponent_Factory(t) { return new (t || PredictCharacterNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PredictCharacterNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictCharacterNavComponent, selectors: [["app-predict-character-nav"]], decls: 7, vars: 0, consts: [[1, "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "col-1", "pt-3"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-10", "pt-3", "text-center"], ["id", "img22", "src", "../../../../assets/img/Img22.png"], [1, "col-1"]], template: function PredictCharacterNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictCharacterNavComponent_Template_img_click_2_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVkaWN0LWNoYXJhY3Rlci1uYXYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "FE3X":
/*!************************************************!*\
  !*** ./src/app/common/dto/personality-data.ts ***!
  \************************************************/
/*! exports provided: PersonalityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalityData", function() { return PersonalityData; });
class PersonalityData {
}
PersonalityData.dataset = {
    "Agreeableness": {
        "Altruism": {
            "high": {
                "term": "Helper",
                "desc": "Will generally go out of their way to help others. "
            },
            "low": {
                "term": "Competitor",
                "desc": "High Performing Individual Contributor. "
            }
        },
        "Cooperation": {
            "high": {
                "term": "Understanding",
                "desc": "Will likely accomodate others viewpoints. "
            },
            "low": {
                "term": "Debater",
                "desc": "Does not shy away from correcting others when (name) thinks they are inacurate. "
            }
        },
        "Modesty": {
            "high": {
                "term": "Low-Key",
                "desc": "Prefers not to be the center of attention. "
            },
            "low": {
                "term": "Proud",
                "desc": "Holds their accomplishments and achievements in high standings and enjoys sharing them with others. "
            }
        },
        "Uncompromising": {
            "high": {
                "term": "Pleaser",
                "desc": "Says the right thing most of the time. "
            },
            "low": {
                "term": "Savage",
                "desc": "Will use every trick in the book to accomplish and execute their goal. "
            }
        },
        "Sympathy": {
            "high": {
                "term": "Empathetic",
                "desc": "Understanding of others opinions, viewpoints, and emotions. "
            },
            "low": {
                "term": "Executive",
                "desc": "Less likely to be understanding of excuses and does not perfer long stories. Might often say 'get to the point'. "
            }
        },
        "Trust": {
            "high": {
                "term": "Trusting",
                "desc": "Usually sees the best in people and will trust them unless the provide a reason not to. "
            },
            "low": {
                "term": "Skeptical",
                "desc": "Wary of others intentions and will look for them to provide a reason to be trusted. "
            }
        },
        "stats": {
            "Make A Sales Pitch": {
                "text": ['Let me provide you with a breakdown of the numbers', 'Here are the key points', 'Lets get right into it', 'Where does this fit into your goals'],
                "do": ['Demonstrate your competitive pricing compared to the rest of the market', 'Provide a detailed cost breakdown', 'Provide information about potential additional costs they may need to account for in the future', 'Provide clear terms, language, and conditions.'],
                "donts": ['Take to long to get to your key points', 'Go over the scheduled time of the call.', 'Ask open ended questions. Try and keep them contained', 'Be overly casual.']
            },
            "Negotiate": {
                "text": ['We discussed your point of view and feel we can meet here...', 'Here are my main priorities...', 'Can you tell me a little bit more about your situation?', "Apologies, but this proposal as is won't work for me"],
                "do": ['Except fierce negotiations', 'Clearly articulate your budget, ranges, and goals', 'Reveal only what you need to reveal', 'Be confident enough to provide your best offer and walk away if they are being to firm'],
                "donts": ['Quickly accept their proposal.', 'Question his authority to make a decision', 'Share information that could be used against you', 'Give in to their demands too easily'],
            },
            "Make A Good Impression": {
                "text": ['Thank you so much in advance for your time', 'Just wondering, what do you hope to get out of this?', 'Here is what I know about your company...', "I'm hard working, a competitor, and am excited to get started."],
                "do": ['Greet them with confidence, firm, and serious.', 'Make sure to ask what they want to get out of the conversation', 'Clearly demonstrate that you are prepared and have done your reserach', 'Be concise and to the point'],
                "donts": ['Show up without doing research', 'Be late', 'Talk too much', 'By any means be casual. '],
            },
            "Discuss Pricing": {
                "text": ['This is the most cost effecitve and competitively priced offering', 'Here is the value this provides to the bottom line', "Here are the pro's and con's to each pricing option"],
                "do": ['Demonstrate  how this increase productivity, efficiency, or x value', 'Clearly demonstrate the ROI (return on investment)', 'Be fully transparent about your benefits and limitations', 'Make sure to have room to negotiatie'],
                "donts": ['Force them to make a decision on your timeline', 'Wait a long time to share the total cost', 'Be too complicated with your pricing'],
            },
            "Convince Them To Hire": {
                "text": ['I believe I can add value by x,y,z', 'I am excited by a fast paced work environment', 'Here are a couple examples of the results I have delivered and my work', "I'm extremely hard working and competitive"],
                "do": ['Demonstrate your competitiveness and desire to win', 'Be professional and serious', 'Focus on the results you have delivered in the past and your relevant experience', 'Come prepared and have done your reserach about the role and company'],
                "donts": ['Be un-organized or underprepared', 'Take to much time to get to answer questions', 'Appear overly friendly or casual', 'Be hesistant to discuss salary, compensation, benefits'],
            },
            "Follow Up": {
                "text": ['I am happy to clarify points x,y,z', 'I believe this can add efficiency and value', 'I need to know by this date', ''],
                "do": ['Come prepared with specific questions', 'Be direct and to the point', 'Provide ample time for them to make a decision', 'Customize all your outreach'],
                "donts": ['Leave out additional information', 'Be vague about your call to action', 'Use a template', 'Follow up just for the sake of following up. Have a clear point.'],
            },
        }
    },
    "Conscientiousness": {
        "Achievement striving": {
            "high": {
                "term": "Driven",
                "desc": "Has high goals and expectations. Will generally rasie the bar. "
            },
            "low": {
                "term": "Content",
                "desc": "Mellow, calm, and laid back style of work. "
            }
        },
        "Cautiousness": {
            "high": {
                "term": "Analytical",
                "desc": "Deliberate and thoughtful before making decisions. Will review pros and cons. "
            },
            "low": {
                "term": "Bold",
                "desc": "Quick decisions based on the moment. "
            }
        },
        "Dutifulness": {
            "high": {
                "term": "Process Oriented",
                "desc": "Typically abides by the rules and thinks of themself as responsible. "
            },
            "low": {
                "term": "Carefree",
                "desc": "Will do what they want even if it is outside of the proceedures. "
            }
        },
        "Self-discipline": {
            "high": {
                "term": "Loyal",
                "desc": "Will not stop until the job gets done no matter how difficult. "
            },
            "low": {
                "term": "Routine",
                "desc": "Prefers consistent and familiar routines. "
            }
        },
        "Self-efficacy": {
            "high": {
                "term": "Confident",
                "desc": "Confident in their ability to achieve the ambitious goals and expectations they have for themselves and others. "
            },
            "low": {
                "term": "Doubtful",
                "desc": "Might doubt their abilities. "
            }
        },
        "Orderliness": {
            "high": {
                "term": "Organized",
                "desc": "Prefers and organized work environment where they come in and know exactly what they should be doing for the day. "
            },
            "low": {
                "term": "Unstructured",
                "desc": "Might be unorganized. "
            }
        },
        "stats": {
            "Make A Sales Pitch": {
                "text": ['Let me go into the details about our solution', 'Here is how the sales cycle typically works', 'I would be happy to provide additional data', 'What are the key challenges you are trying to solve'],
                "do": ['Go into every detail about the product', 'Provide a clear roadmap', 'Send additional information after your conversation', 'Understand their pain points'],
                "donts": ['Do much talking without asking for their comments, questions, and concerns', 'Be overly aggresive ', 'Stay high level', 'Be overly casual']
            },
            "Negotiate": {
                "text": ['How would you propose to move forward', 'I value the time that you have spent thinking about the proposal ', 'Lets get into the details', 'These are the statistics about our competitors'],
                "do": ['Be understanding of their expectations and processes', 'Be calm, cool, and collected', 'Go into the "weeds" about how your solution will provide value', 'Provide customer references to back up your points'],
                "donts": ['Try and speed up their typical buying process', 'Be overly aggresive', 'Be sarcastic', "Use generic statements that can't be backed up with statistics"],
            },
            "Make A Good Impression": {
                "text": ['I would love to get your thoughts on this', "It's a pleasure to meet you, thank you for taking the time','How would you recomend going about this", 'Here is an interesting statistic'],
                "do": ['Provide interesting and relevant data', 'Use a calm, collected tone. ', 'Ask about their thought process and how they would do things', 'Make them feel respected. '],
                "donts": ['Bring other people onto the call unannounced.', 'Appear cocky', 'Change the agenda that you had discussed', 'Be too energetic'],
            },
            "Discuss Pricing": {
                "text": ['Here is the pricing breakdown', "I'll let you take some time to think','I will send over additional information via email", 'We should discuss the additional terms and conditions'],
                "do": ['Share pricing breakdown so they understand exactly how you got to your numbers', 'Provide them time to analyze your information', 'Provide additional information', 'Be clear about additional language and terms'],
                "donts": ['Simply provide the cost without providing a breakdown', 'Expect them to make a quick decision', 'Leave out details', 'Provide generic numbers'],
            },
            "Convince Them To Hire": {
                "text": ['I looked at your accomplishments on Linkedin and am very impressed', 'I would love to learn more about your current processes', 'Let me show you some of the projects I have previously completed', 'I know you might have some questions'],
                "do": ['Be calm, cool, and collected', 'Demonstrate that you have done your research on them', 'Focus on your ability to quickly learn, adapt, and improve ', 'Follow up over email with answers to any questions they may have had'],
                "donts": ['Be to pushy in asking for a position or decision', 'Forget to answer all of thier questions', '', ''],
            },
            "Follow Up": {
                "text": ['Thank you very much for your time on x day', 'I know you are busy', 'What where your thoughts about...?', 'I wanted to see if there were any additional questions that I could answer.'],
                "do": ['Be appreciative of their time, schedule, and day', 'Expect that it might take them longer to respond', 'Respect the preferences and boundaries they may have discussed', 'Ask them if you should stop reaching out.'],
                "donts": ['Be overly aggresive in your follow ups', 'Be overly generic', 'Follow up too quickly', ''],
            },
        }
    },
    "Extraversion": {
        "Activity level": {
            "high": {
                "term": "Fast Paced",
                "desc": "Prefers a fast paced work environment. "
            },
            "low": {
                "term": "Laid Back",
                "desc": "Typically more relaxed and easy going. "
            }
        },
        "Assertiveness": {
            "high": {
                "term": "Leader",
                "desc": "Will usually take charge of the team, speak up, and lead the group. Might be the person the group decides to be the speaker. "
            },
            "low": {
                "term": "Listener",
                "desc": "Prefers to listen first then speak. "
            }
        },
        "Cheerfulness": {
            "high": {
                "term": "Humorous",
                "desc": "Always good to crack a joke here and there to get others laughing. "
            },
            "low": {
                "term": "Serious",
                "desc": "Typically blunt and to the point. "
            }
        },
        "Excitement-seeking": {
            "high": {
                "term": "Risk Taker",
                "desc": "Prefers to take risks and experience new ideas and ventures. "
            },
            "low": {
                "term": "Cautious",
                "desc": "Prefers to take more calculated moves. "
            }
        },
        "Outgoing": {
            "high": {
                "term": "Friendliness",
                "desc": "Generally comfortable in group settings. "
            },
            "low": {
                "term": "Reserved",
                "desc": "Tends to be more of a private person. "
            }
        },
        "Gregariousness": {
            "high": {
                "term": "Social",
                "desc": "Enjoys group work and social activities. "
            },
            "low": {
                "term": "Independent",
                "desc": "Prefers to have their own time and space to think. "
            }
        },
        "stats": {
            "Make A Sales Pitch": {
                "text": ['I would be happy to send over additional data', 'What are the key challenges that you are looking to solve?', 'Here are the details..', 'Let me discuss our competitive value'],
                "do": ['Send additional data to support your pitch.', 'Ask about her strategy, timeline, and roadmap', 'Provide a comprehensive description of your solution', 'Be clear and concise'],
                "donts": ['Forget to mention details about your solution', 'Be overly friendly and enthusiastic', 'Talk too much without getting her feedback', 'Be unrealistically optimistic']
            },
            "Negotiate": {
                "text": ["Let's get more detailed", 'How would you propose to move forward', 'How would you like to move forward?', "Here's what I expect for this..."],
                "do": ['Dig into the details of what you both want to accomplish', 'Share outside data to support your claims', 'Follow her expectations and conventions.', 'Set expectations for the negotiation process'],
                "donts": ['Say anythigng sarcastic', "Use claims that you can't back up with data", 'Take her outside their typical negotiation process', 'Insist on your method of doing things.'],
            },
            "Make A Good Impression": {
                "text": ['What do you think of this?', 'Want to hear something interesting?', 'Im curious to know what you think..', 'I can share what I know'],
                "do": ['Ask about her skills or knowledge', 'Make her feel respected', 'Share something new that you learned', 'Quickly demonstrate your expertise'],
                "donts": ['Change the call agenda', 'Be overly enthusiastic or optimistic', 'Bring other people onto the call unannounced', 'Ask about personal details unless she does'],
            },
            "Discuss Pricing": {
                "text": ['Want me to send any additional information?', "Let's go through the additional terms..", 'I can share the pricing formulate to show you how it works...', 'I can send over a full pricing breakdown..'],
                "do": ['Ask if she needs any further information', 'Outline all the extra details like terms and conditions', 'Share formulas, calculations, or spreadsheets if possible.', 'Send full item lists and breakdowns via email. '],
                "donts": ['Leave out any details about cost.', 'Throw out ballpark numbers. ', 'Get to the bottom line before explaining the logic. ', 'Make any errors or exaggerations.'],
            },
            "Convince Them To Hire": {
                "text": ['I focus on producing high quality results...', 'I know you probably have questions, like..', 'I have so much respect for what you all have accomplished...', 'I am confident in my ability to...'],
                "do": ['Focus on your ability to produce high quality results', 'Offer to answer questions she has in writing', 'Use a calm, collected tone.', 'Project certainty and competence.'],
                "donts": ['Leave any of her questions unanswered.', 'Spend time connecting emotionally.', 'Work outisde of her established hiring process', 'Focus too much on your creativity.'],
            },
            "Follow Up": {
                "text": ['What do you think about it?', 'Do you have any questions about it that I can answer', 'I appreciate you taking the time to..', 'I need to know where you stand so that I can...'],
                "do": ['Respect any boundaries she lays out', 'Ask her if you should stop reaching out', 'Show appreciation for her time', 'Make clear why you need her input'],
                "donts": ['Use buzzwords or exaggeration to sell yourself', 'Call too quickly after the initial conversation.', 'Put too much presure on her to respond quickly', 'Bombard her with calls if she does not answer or reach out.'],
            },
        }
    },
    "Emotional range": {
        "Fiery": {
            "high": {
                "term": "Fiesty",
                "desc": "Might have a quick temper. "
            },
            "low": {
                "term": "Calm",
                "desc": "Calm. "
            }
        },
        "Prone to worry": {
            "high": {
                "term": "Worrisome",
                "desc": "Generally worries about how things might not work or may go wrong. "
            },
            "low": {
                "term": "Confident",
                "desc": "Might be more self assured in their abilities to get things done. "
            }
        },
        "Melancholy": {
            "high": {
                "term": "Thoughtul",
                "desc": "Thinks through different scenarious and alternatives in projects. "
            },
            "low": {
                "term": "Content",
                "desc": "Generally comfortable with themselves exaclty as they are. "
            }
        },
        "Immoderation": {
            "high": {
                "term": "Tempted",
                "desc": "Generally tempted by their own desires. "
            },
            "low": {
                "term": "Disciplined",
                "desc": "Has a high level of self control. "
            }
        },
        "Self-consciousness": {
            "high": {
                "term": "Worrisome",
                "desc": "Might be more politically correct than others. "
            },
            "low": {
                "term": "Assured",
                "desc": "Generally confident in their viewpoints and ability to get things done. "
            }
        },
        "Susceptible to stress": {
            "high": {
                "term": "Stressed",
                "desc": "Gets stressed out by uncertainty and figuring things out. Likes routines and plans. "
            },
            "low": {
                "term": "Calm, Cool, Collected",
                "desc": "Pressure player. Go to person for high pressure situations. "
            }
        },
        "stats": {
            "Make A Sales Pitch": {
                "text": ['What are the most important factors for you to get out of this?', 'Tell me more about your overall strategy and goals and what you are looking for?', 'Let me provide an estimate of the total costs', 'Here are our main value points'],
                "do": ['Finish the call faster than the scheduled time slot', 'Focus on competitive advantages', 'Bring up costs as early as you can', 'Be energetic, confident, and empathetic'],
                "donts": ['Go over the amount of time you have scheduled', "Take too long to get to your key value's and competitive differenciatiors", 'Go from topic to topic', '']
            },
            "Negotiate": {
                "text": ['(Name), here are the most important things for me', 'Apologies, but we will have to re-evaluate as this is not getting us to where we want to be', 'We thought over the proposal and here is what we think might work better', "Let's work together to find our common ground"],
                "do": ['Make sure you articulate your business goals clearly and early', "Don't waste time if he is not being flexible", 'Expect a tough negotiation', 'Challenge both parties to come up with better solution'],
                "donts": ['Ask for what you want, ask for under what you want so you have room to meet at what you do want', 'Be to easy in the negotiation', 'Accept the proposal on the spot without having the time to analyze and discuss it', 'Allow them to take control over the conversation'],
            },
            "Make A Good Impression": {
                "text": ['Hey, (Name) wanted to ask what you wanted to get out of this conversation?', 'I would love to get started and add value', 'Thank you so much for your time', 'What would the most valuable and important topic for you?'],
                "do": ['Make sure to understand what their goals are', 'Be direct and get to the point', 'Be professional, firm, and confident', 'Show you are competitive '],
                "donts": ['Be too personal unless it makes sense to bring it up in conversation', 'Talk too much without getting their feedback', 'Be late', 'Come without doing research'],
            },
            "Discuss Pricing": {
                "text": ['How do you measure your return on investment', 'Here are also some additional things we provide outside the price', 'This option will generate the most ROI and impact on bottom line', 'Here is our pricing relevant to our competitors'],
                "do": ['Clearly articulate how they will achieve savings', 'Allow ample room for contract negotiations', 'Clearly demonstrate the value they will be getting from your solution', 'Provide competitive pricing relevant to the industry.'],
                "donts": ['Take to long to get to the numbers ', 'Be to easy going', 'Play the "negotiation" game. Just get right to the point with your best offer.', 'Take a long time to send over information'],
            },
            "Convince Them To Hire": {
                "text": ['(Name), here is how I provide value for your team', 'Let me show you my results / work', 'My goal is to provide an immediate impact to your organization', 'I thrive in a fast paced environment'],
                "do": ['Be professional, serious, and to the point', 'Come prepared with a project that you have done in the past', 'Clearly express your competitive nature to success and be challenged', 'Appear very self confident'],
                "donts": ['Be unorganized and all over the place ', 'Hesitate to talk about compensation, benefits, and career progression', 'Use unclear language or buzzwords', 'Take a long time to get to the point'],
            },
            "Follow Up": {
                "text": ['I am following up about x,y,z', 'Here is the deadline', 'I would be happy to provide more information about ', 'Here is what next steps I am thinking, does this sound good to you?'],
                "do": ['Be forthcoming and ask whatever questions you have sooner than later', 'Qualify and establish timeline and buget', 'Prepared specific questions that are open ended and will have them talk', 'Reach out just for the sake of reaching out'],
                "donts": ['Forget to have a clear and concise call to action', 'Reach out to frequently', 'Leave out important details ', 'Be to long in your messages / conversations'],
            },
        }
    },
    "Openness": {
        "Adventurousness": {
            "high": {
                "term": "Adventurous",
                "desc": "Eager to experience new ventures, ideas, projects, and discussions. "
            },
            "low": {
                "term": "Routine Oriented",
                "desc": "Prefers familiar routines, processes, and structure. "
            }
        },
        "Artistic interests": {
            "high": {
                "term": "Designer",
                "desc": "A person who plans the look or workings of something prior to it being made. "
            },
            "low": {
                "term": "Designer",
                "desc": "A person who plans the look or workings of something prior to it being made. "
            }
        },
        "Emotionality": {
            "high": {
                "term": "Emotionally Intelligent",
                "desc": "Has a high level of emotional intelligence and knows how to bring out the best in people. "
            },
            "low": {
                "term": "Blunt",
                "desc": "Will generally be direct and to the point. "
            }
        },
        "Imagination": {
            "high": {
                "term": "Conceptual",
                "desc": "Likes to deal with big ideas rather than be 'bogged down in the weeds'. Visionary ."
            },
            "low": {
                "term": "Analytical",
                "desc": "Prefers data and statistics in conversations and meetings. "
            }
        },
        "Intellect": {
            "high": {
                "term": "Abstract",
                "desc": "Generally prefers to deal with ideas rather than all the data and facts behind them. "
            },
            "low": {
                "term": "Realistic",
                "desc": "Prefers to deal with facts rather than opinions and ideas. "
            }
        },
        "Authority-challenging": {
            "high": {
                "term": "Challenger",
                "desc": "Prefers to challenge 'traditional' and 'established' ways of doing things. Will think 'out of the box'. "
            },
            "low": {
                "term": "Traditional",
                "desc": "Prefers following rules and authority. "
            }
        },
        "stats": {
            "Make A Sales Pitch": {
                "text": ['Here are some examples of other companies we are working with', 'What are your thoughts so far?', 'Please feel free to stop me with any questions you might have along the way', 'This feature is particular relevent because'],
                "do": ['Provide references', 'Allow room for questions and comments along the way', 'Be welcoming, a bit more loose, and enthusiastic', 'Show passion'],
                "donts": ['Be overly serious or businesslike', 'Forget to have clearly defined next steps', 'Think that they will provide you with immediate feedback or concerns', 'Get into pricing to quickly']
            },
            "Negotiate": {
                "text": ['Here is a similair situation that I worked out with others', 'How do you feel about this option?', 'Here is what is going on behind the scenes', 'This is how we can provide value'],
                "do": ['Demonstrate and earn trust by providing ample references', 'Make time for small talk and getting to know them before going in to business', 'Be forthcoming and open ', 'Share your information in more of a story rather than data and statistics'],
                "donts": ['Be unorganized and unprepared', 'Skip over small talk', 'Allow the topics to change before making your point', 'Appear overly "salesy"'],
            },
            "Make A Good Impression": {
                "text": ["Hey! Thank you so much for your time. It's great to meach you.", "It would be great to meet up sometime.", 'I would love to introduce you to my colleague', 'Excited to catch up'],
                "do": ['Be casual and friendly ', 'Make sure to do small talk', 'Show who you are commonly connected with', 'Be positive and optimistic'],
                "donts": ['Be overly serious  or businesslike', 'Skip over small talk', 'Rush into business discussions', 'Sound very monotone'],
            },
            "Discuss Pricing": {
                "text": ['Are you comfortable discussing pricing?', 'Here is an overview of the numbers', 'Does anyone else also need to give approval for this option', 'Here is a comparison to where we stand with other companies in the industry'],
                "do": ['Make sure you have built rapport', 'Explain what others in similair industrys are paying', 'Provide ample information and help build a win story so they can champion your solution ', 'Go over price on a phone call and then make sure to follow up in an email with a complete breakdown'],
                "donts": ['Think they will be overly open with their concerns', 'Ask them to make a decision on the spot or with an aggresive timeline', 'Discuss pricing without building trust and rapport', 'Keep the conversation to detailed on the phone.'],
            },
            "Convince Them To Hire": {
                "text": ['It would be awesome to get to know the team', 'I see that you have done x,y,z that is incredible', 'It would be awesome to work on a project like this', 'I like to solve problems let me show you some examples of my experience'],
                "do": ['Show that you are a team player and work well with others', 'Point out a mutual connection or interest', 'Be friendly, energetic, and enthusiastic', ''],
                "donts": ['', 'Forget to show projects or relevant work you have done in the past', 'Move the conversation too quickly', 'Use overly general, bland language'],
            },
            "Follow Up": {
                "text": ['Let me know what works best for you!', 'I was happy to hear that you..', 'It was great to connect with you!'],
                "do": ['Mention something from the previous conversation', 'Keep it very simple', 'Clearly state why and what you are following up about', 'Make sure to relate it back to them not just about your solution'],
                "donts": ['Expect to many details', 'Rush through the follow up conversation', 'Provide a strict deadline', 'Keep the outreach only about your solutions'],
            },
        }
    }
};


/***/ }),

/***/ "Qh2z":
/*!********************************************************************************!*\
  !*** ./src/app/predict/component/predict-feature/predict-feature.component.ts ***!
  \********************************************************************************/
/*! exports provided: PredictFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictFeatureComponent", function() { return PredictFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PredictFeatureComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r1);
} }
class PredictFeatureComponent {
    constructor() {
        this.attributes = [];
        this.title = "";
    }
    ngOnInit() {
    }
}
PredictFeatureComponent.ɵfac = function PredictFeatureComponent_Factory(t) { return new (t || PredictFeatureComponent)(); };
PredictFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictFeatureComponent, selectors: [["app-predict-feature"]], inputs: { attributes: ["dataset", "attributes"], title: "title" }, decls: 7, vars: 2, consts: [[1, "h-100", "square-border-gradient"], [1, "d-flex", "justify-content-center", "align-middle"], [1, "m-0", "p-0", "feature-text", "col-8", "text-color-1", "text-uppercase", "font-size-4", "text-center"], [1, "d-flex", "justify-content-center", "text-color-1", "font-size-2", "overflow-scroll"], [4, "ngFor", "ngForOf"]], template: function PredictFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PredictFeatureComponent_li_6_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -25px;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    vertical-align: center;\r\n    line-height: 50px;\r\n}\r\n\r\n.overflow-scroll[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtZmVhdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcmVkaWN0LWZlYXR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmVhdHVyZS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "WKta":
/*!*****************************************************************!*\
  !*** ./src/app/common/service/prediction/prediction.service.ts ***!
  \*****************************************************************/
/*! exports provided: PredictionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionService", function() { return PredictionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _enums_request_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/request-type.enum */ "9Fk+");
/* harmony import */ var _utils_uuid_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uuid-utils */ "+LVv");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/url-utils */ "zcPD");
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/event-type.enum */ "UekI");
/* harmony import */ var _utils_person_parser_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/person-parser-utils */ "dfzP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _factory_request_request_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../factory/request/request-factory */ "FljS");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../token/token.service */ "vRxr");
/* harmony import */ var _tab_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab/tab.service */ "08lf");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../message/message.service */ "Cd3V");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");













class PredictionService {
    constructor(factory, tokenService, tabService, messageService, toaster) {
        this.factory = factory;
        this.tokenService = tokenService;
        this.tabService = tabService;
        this.messageService = messageService;
        this.toaster = toaster;
        this.predictionResult = "";
    }
    getPredictionResult() {
        return this.predictionResult;
    }
    predictByUrl(url) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toaster.info("Please allow us 50-60 sec. to load information about the user.");
            const requestType = _utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["UrlUtils"].getUrlType(url);
            const uuid = _utils_uuid_utils__WEBPACK_IMPORTED_MODULE_3__["UuidUtils"].getUUID();
            yield this.tabService.validateLinkedInTabStatus(requestType, uuid);
            const tabId = yield this.tabService.getTabIdBasedOnCampaignType(requestType, uuid);
            const token = this.tokenService.getToken();
            if (tabId === undefined || !this.tokenService.isTokenAvaliable()) {
                yield this.tabService.destroyCreatedTabs(uuid);
                return reject({
                    message: "Could not process the request due to 'Linkedin service is unavalible Please logout from LinkedIn and Syncup AI close the browser and try again.'"
                });
            }
            const fullDataUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["UrlUtils"].getPredictionUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.prediction.request.linkedin, url);
            const predictionRequest = this.factory.getPayload(_enums_request_type_enum__WEBPACK_IMPORTED_MODULE_2__["RequestType"].Prediction, fullDataUrl, token);
            this.messageService.sendMessageToTab(tabId, _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_5__["EventType"].PREDICTION, predictionRequest, this.processResult(uuid, resolve, reject));
        }));
    }
    processResult(uuid, resolve, reject) {
        return (result) => {
            if (result != undefined) {
                const text = _utils_person_parser_utils__WEBPACK_IMPORTED_MODULE_6__["PersonParserUtils"].convertToText(result);
                if (text.length < 400) {
                    this.toaster.error("User has not provided enough information about himself/herself to make a prediction.");
                    return reject(false);
                }
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.prediction.closeTab) {
                    this.tabService.destroyCreatedTabs(uuid);
                }
                this.processServerRequest(text, resolve, reject);
            }
            else {
                this.toaster.error("Could not process the request due to 'Linkedin service is unavalible Please logout from LinkedIn and Syncup AI close the browser and try again.");
                return reject(false);
            }
        };
    }
    processServerRequest(text, resolve, reject) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.prediction.request.server;
        const token = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api.prediction.request.token;
        const payload = this.factory.getPayload(_enums_request_type_enum__WEBPACK_IMPORTED_MODULE_2__["RequestType"].PredictionServer, url, token);
        payload.service.body = text;
        fetch(payload.url, payload.service).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.predictionResult = yield result.json();
            return resolve(true);
        }), (error) => {
            this.toaster.error("Could not process the request due to 'Prediction server is offline'.");
            return reject(false);
        });
    }
}
PredictionService.ɵfac = function PredictionService_Factory(t) { return new (t || PredictionService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_factory_request_request_factory__WEBPACK_IMPORTED_MODULE_8__["RequestFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_tab_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_message_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"])); };
PredictionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: PredictionService, factory: PredictionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eQ4C":
/*!**************************************************************************!*\
  !*** ./src/app/predict/component/predict-home/predict-home.component.ts ***!
  \**************************************************************************/
/*! exports provided: PredictHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictHomeComponent", function() { return PredictHomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/prediction/prediction.service */ "WKta");
/* harmony import */ var _predict_home_nav_predict_home_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../predict-home-nav/predict-home-nav.component */ "2iIw");







class PredictHomeComponent {
    constructor(router, activeRoute, formBuilder, toastr, predictionService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.predictionService = predictionService;
        this.predictForm = this.formBuilder.group({
            'url': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(https:\/\/www\.linkedin\.com\/in\/).*(\/)/gm)]]
        });
    }
    ngOnInit() {
    }
    navigateToInsight() {
        this.router.navigate(['../insight'], { relativeTo: this.activeRoute });
    }
    onSubmit() {
        var _a;
        this.predictForm.markAllAsTouched();
        if (this.predictForm.valid) {
            this.predictionService.predictByUrl((_a = this.predictForm.get("url")) === null || _a === void 0 ? void 0 : _a.value).then((status) => {
                if (status) {
                    this.navigateToInsight();
                }
            });
        }
        else {
            this.toastr.error("Please provide valid user profile url.");
        }
    }
}
PredictHomeComponent.ɵfac = function PredictHomeComponent_Factory(t) { return new (t || PredictHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_4__["PredictionService"])); };
PredictHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PredictHomeComponent, selectors: [["app-predict-home"]], decls: 19, vars: 1, consts: [[1, "row"], [3, "formGroup"], [1, "col-2"], ["id", "img18", "src", "../../../../assets/img/Img18.png"], [1, "col-1"], [1, "col-6"], [1, "col-12", "pt-3", "text-uppercase", "text-center", "font-size-6", "text-color-1"], [1, "col-12", "pt-5", "text-uppercase", "text-center", "font-size-6", "text-color-1"], ["type", "text", "formControlName", "url", "placeholder", "https://www.linkedin.com/in/username", 1, "w-100", "font-size-4", "input-box-gradient"], [1, "col-12", "pt-5", "text-uppercase", "text-center", "font-size-6", "text-color-1", 3, "click"], ["id", "img21", "src", "../../../../assets/img/Img21.png", 1, "pt-5"], ["id", "img19", "src", "../../../../assets/img/Img19.png"]], template: function PredictHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-predict-home-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Who would you like to learn about? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictHomeComponent_Template_div_click_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.predictForm);
    } }, directives: [_predict_home_nav_predict_home_nav_component__WEBPACK_IMPORTED_MODULE_5__["PredictHomeNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVkaWN0LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "iCIX":
/*!****************************************************************************************!*\
  !*** ./src/app/predict/component/predict-insight-nav/predict-insight-nav.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PredictInsightNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictInsightNavComponent", function() { return PredictInsightNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PredictInsightNavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
    navigateToCharacter() {
        this.router.navigateByUrl("/predict/characteristics");
    }
}
PredictInsightNavComponent.ɵfac = function PredictInsightNavComponent_Factory(t) { return new (t || PredictInsightNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PredictInsightNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictInsightNavComponent, selectors: [["app-predict-insight-nav"]], decls: 8, vars: 0, consts: [[1, "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "col-2", "pt-3"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-8", "text-center", "pr-0"], ["id", "img20", "src", "../../../../assets/img/Img20.png"], [1, "col-2", "pt-3", "pl-0"], [1, "btn", "btn-info", "btn-block", "btn-transparent", "font-size-4", "text-uppercase", "font-size-3-5", "rounded-pill", 3, "click"]], template: function PredictInsightNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictInsightNavComponent_Template_img_click_2_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictInsightNavComponent_Template_button_click_6_listener() { return ctx.navigateToCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View characteristics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".btn-transparent[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtaW5zaWdodC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJwcmVkaWN0LWluc2lnaHQtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "oWIV":
/*!************************************************************************************!*\
  !*** ./src/app/predict/component/predict-character/predict-character.component.ts ***!
  \************************************************************************************/
/*! exports provided: PredictCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictCharacterComponent", function() { return PredictCharacterComponent; });
/* harmony import */ var src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/dto/personality-data */ "FE3X");
/* harmony import */ var src_app_common_dto_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/dto/user-profile */ "FCKO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/service/prediction/prediction.service */ "WKta");
/* harmony import */ var src_app_common_service_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/user/user.service */ "sBHq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _predict_character_nav_predict_character_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../predict-character-nav/predict-character-nav.component */ "DdOR");
/* harmony import */ var _predict_feature_trait_predict_feature_trait_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../predict-feature-trait/predict-feature-trait.component */ "qjvH");








class PredictCharacterComponent {
    constructor(predicationService, userService, router, activeRoutes) {
        this.predicationService = predicationService;
        this.userService = userService;
        this.router = router;
        this.activeRoutes = activeRoutes;
        this.characteristics = {};
        this.user = new src_app_common_dto_user_profile__WEBPACK_IMPORTED_MODULE_1__["UserProfile"]();
        this.predictionResult = this.predicationService.getPredictionResult();
        if (this.predictionResult === "") {
            this.router.navigate(["../dashboard"], { relativeTo: this.activeRoutes });
        }
        this.preProcessData(this.predictionResult);
    }
    preProcessData(prediction) {
        let big5 = new Map();
        let sortedBig5;
        prediction.personality.forEach((element) => {
            big5.set(this.getCloseness(element.percentile), element);
        });
        sortedBig5 = new Map([...big5.entries()].sort());
        sortedBig5.forEach((value, key) => {
            let traits = new Map();
            value.children.forEach((trait) => {
                traits.set(this.getCloseness(trait.percentile), trait);
            });
            traits = new Map([...traits.entries()].sort());
            let termsList = [];
            traits.forEach((trait, key) => {
                let data = this.getValue(value.name, trait);
                if (data.key !== "" && data.value !== "") {
                    termsList.push(data);
                }
            });
            if (value.name === "Emotional range") {
                this.characteristics["Emotional".toLowerCase()] = termsList;
            }
            else {
                this.characteristics[value.name.toLowerCase()] = termsList;
            }
        });
    }
    ngOnInit() {
    }
    getCloseness(value) {
        if (value > 0.5) {
            return 1 - value;
        }
        else if (value < 0.5) {
            return value;
        }
        return 0;
    }
    getValue(big, trait) {
        let type = "low";
        if (trait.percentile > 0.5) {
            type = "high";
        }
        if (src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big] == undefined || src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name] == undefined) {
            return {
                key: "",
                value: "",
            };
        }
        const data = {
            key: src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name][type].term,
            value: src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name][type].desc,
        };
        return data;
    }
}
PredictCharacterComponent.ɵfac = function PredictCharacterComponent_Factory(t) { return new (t || PredictCharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_3__["PredictionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PredictCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PredictCharacterComponent, selectors: [["app-predict-character"]], decls: 16, vars: 6, consts: [[1, "row"], [1, "row", "pt-2"], [1, "col-5", "height-35"], ["title", "Agreeableness", 3, "dataset"], [1, "col-2", "height-35"], [1, "p-1", "profile", "profile-border-gradient", 3, "src"], ["title", "Conscientiousness", 3, "dataset"], [1, "row", "pt-5"], [1, "col-4", "height-35"], ["title", "Extraversion", 3, "dataset"], ["title", "Openness", 3, "dataset"], ["title", "Emotional range", 3, "dataset"]], template: function PredictCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-predict-character-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-predict-feature-trait", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-predict-feature-trait", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-predict-feature-trait", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-predict-feature-trait", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-predict-feature-trait", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataset", ctx.characteristics.agreeableness);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.user.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataset", ctx.characteristics.conscientiousness);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataset", ctx.characteristics.extraversion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataset", ctx.characteristics.openness);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataset", ctx.characteristics.emotional);
    } }, directives: [_predict_character_nav_predict_character_nav_component__WEBPACK_IMPORTED_MODULE_6__["PredictCharacterNavComponent"], _predict_feature_trait_predict_feature_trait_component__WEBPACK_IMPORTED_MODULE_7__["PredictFeatureTraitComponent"]], styles: [".height-35[_ngcontent-%COMP%] {\r\n    height: 35vh;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    border-radius:50%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZiIsImZpbGUiOiJwcmVkaWN0LWNoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodC0zNSB7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "pM3r":
/*!***************************************************!*\
  !*** ./src/app/common/enums/insight-type.enum.ts ***!
  \***************************************************/
/*! exports provided: InsightType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightType", function() { return InsightType; });
var InsightType;
(function (InsightType) {
    InsightType[InsightType["None"] = 0] = "None";
    InsightType[InsightType["Sales"] = 1] = "Sales";
    InsightType[InsightType["Impress"] = 2] = "Impress";
    InsightType[InsightType["FollowUp"] = 3] = "FollowUp";
    InsightType[InsightType["Pricing"] = 4] = "Pricing";
    InsightType[InsightType["Negotiate"] = 5] = "Negotiate";
    InsightType[InsightType["Convince"] = 6] = "Convince";
})(InsightType || (InsightType = {}));


/***/ }),

/***/ "qfiV":
/*!********************************************************************************!*\
  !*** ./src/app/predict/component/predict-insight/predict-insight.component.ts ***!
  \********************************************************************************/
/*! exports provided: PredictInsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictInsightComponent", function() { return PredictInsightComponent; });
/* harmony import */ var src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/dto/personality-data */ "FE3X");
/* harmony import */ var src_app_common_dto_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/dto/user-profile */ "FCKO");
/* harmony import */ var src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/enums/insight-type.enum */ "pM3r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/prediction/prediction.service */ "WKta");
/* harmony import */ var src_app_common_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/service/user/user.service */ "sBHq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _predict_insight_nav_predict_insight_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../predict-insight-nav/predict-insight-nav.component */ "iCIX");
/* harmony import */ var _predict_insight_btn_predict_insight_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../predict-insight-btn/predict-insight-btn.component */ "umut");
/* harmony import */ var _predict_feature_predict_feature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../predict-feature/predict-feature.component */ "Qh2z");










class PredictInsightComponent {
    constructor(predicationService, userService, router, activeRoutes) {
        this.predicationService = predicationService;
        this.userService = userService;
        this.router = router;
        this.activeRoutes = activeRoutes;
        this.preProcessedData = [];
        this.insightType = src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"];
        this.user = new src_app_common_dto_user_profile__WEBPACK_IMPORTED_MODULE_1__["UserProfile"]();
        this.overview = '';
        this.tryToSay = [];
        this.tryToDo = [];
        this.tryToAvoid = [];
        this.predictionResult = this.predicationService.getPredictionResult();
        if (this.predictionResult === "") {
            this.router.navigate(["../dashboard"], { relativeTo: this.activeRoutes });
        }
        this.overview = this.getOverView(this.predictionResult);
        this.preprocessDataset(this.predictionResult);
    }
    preprocessDataset(prediction) {
        let big5 = new Map();
        let sortedBig5;
        prediction.personality.forEach((element) => {
            big5.set(this.getCloseness(element.percentile), element);
        });
        sortedBig5 = new Map([...big5.entries()].sort());
        sortedBig5.forEach((value, key) => {
            this.preProcessedData.push({
                name: value.name,
                action: {
                    "stats": src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[value.name]['stats']
                }
            });
        });
    }
    getOverView(prediction) {
        let traits = new Map();
        let sortedTraits;
        let count = 0;
        let overview = "";
        prediction.personality.forEach((element) => {
            element.children.forEach((trait) => {
                let data = this.getValue(element.name, trait);
                if (data.name !== "" && data.desc !== "") {
                    traits.set(this.getCloseness(trait.percentile), this.getValue(element.name, trait));
                }
            });
        });
        sortedTraits = new Map([...traits.entries()].sort());
        sortedTraits.forEach((value, key) => {
            if (count < 5) {
                overview = overview.concat(value.desc);
            }
            count++;
        });
        return overview;
    }
    getCloseness(value) {
        if (value > 0.5) {
            return 1 - value;
        }
        else if (value < 0.5) {
            return value;
        }
        return 0;
    }
    getValue(big, trait) {
        let type = "low";
        if (trait.percentile > 0.5) {
            type = "high";
        }
        if (src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big] == undefined || src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name] == undefined) {
            return {
                name: "",
                desc: "",
            };
        }
        const data = {
            name: src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name][type].term,
            desc: src_app_common_dto_personality_data__WEBPACK_IMPORTED_MODULE_0__["PersonalityData"].dataset[big][trait.name][type].desc,
        };
        return data;
    }
    ngOnInit() {
    }
    onActionSelect(type) {
        switch (type) {
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].Convince:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Convince Them To Hire"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Convince Them To Hire"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Convince Them To Hire"].donts;
                break;
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].FollowUp:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Follow Up"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Follow Up"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Follow Up"].donts;
                break;
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].Impress:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Make A Good Impression"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Make A Good Impression"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Make A Good Impression"].donts;
                break;
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].Negotiate:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Negotiate"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Negotiate"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Negotiate"].donts;
                break;
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].Pricing:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Discuss Pricing"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Discuss Pricing"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Discuss Pricing"].donts;
                break;
            case src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_2__["InsightType"].Sales:
                this.tryToSay = this.preProcessedData[0].action["stats"]["Make A Sales Pitch"].text;
                this.tryToDo = this.preProcessedData[0].action["stats"]["Make A Sales Pitch"].do;
                this.tryToAvoid = this.preProcessedData[0].action["stats"]["Make A Sales Pitch"].donts;
                break;
        }
    }
}
PredictInsightComponent.ɵfac = function PredictInsightComponent_Factory(t) { return new (t || PredictInsightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_common_service_prediction_prediction_service__WEBPACK_IMPORTED_MODULE_4__["PredictionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_common_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
PredictInsightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PredictInsightComponent, selectors: [["app-predict-insight"]], decls: 34, vars: 11, consts: [[1, "row"], [1, "row", "justify-content-center"], [1, "col-10"], [1, "col-2"], [1, "profile", "profile-border-gradient", 3, "src"], [1, "col-10", "gradient-border-right", "gradient-border-left"], [1, "text-color-1", "font-size-4", "text-uppercase"], [1, "text-color-1", "font-size-2", "overflow-y-scroll", "height-20"], [1, "row", "justify-content-center", "pt-3"], [1, "col-10", "display"], ["text", "Make a Sales Pitch", 3, "type", "onActionSelect"], ["text", "Make a Good Impression", 3, "type", "onActionSelect"], ["text", "Follow Up", 3, "type", "onActionSelect"], ["text", "Discuss Pricing", 3, "type", "onActionSelect"], ["text", "Negotiate", 3, "type", "onActionSelect"], ["text", "Convince Them to Hire", 3, "type", "onActionSelect"], [1, "row", "justify-content-center", "pt-5"], [1, "col-10", "p-0", "d-flex", "justify-content-between"], [1, "col-4", "height-30"], ["title", "try to say", 3, "dataset"], ["title", "please try do", 3, "dataset"], ["title", "please don't do", 3, "dataset"]], template: function PredictInsightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-predict-insight-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "app-predict-insight-btn", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_15_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "app-predict-insight-btn", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_17_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "app-predict-insight-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_19_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "app-predict-insight-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_21_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "app-predict-insight-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_23_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "app-predict-insight-btn", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onActionSelect", function PredictInsightComponent_Template_app_predict_insight_btn_onActionSelect_25_listener($event) { return ctx.onActionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "app-predict-feature", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-predict-feature", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-predict-feature", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.user.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.overview, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.Sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.Impress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.FollowUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.Pricing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.Negotiate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.insightType.Convince);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataset", ctx.tryToSay);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataset", ctx.tryToDo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataset", ctx.tryToAvoid);
    } }, directives: [_predict_insight_nav_predict_insight_nav_component__WEBPACK_IMPORTED_MODULE_7__["PredictInsightNavComponent"], _predict_insight_btn_predict_insight_btn_component__WEBPACK_IMPORTED_MODULE_8__["PredictInsightBtnComponent"], _predict_feature_predict_feature_component__WEBPACK_IMPORTED_MODULE_9__["PredictFeatureComponent"]], styles: [".profile[_ngcontent-%COMP%] {\r\n    border-radius:50%;\r\n    width: 100%;\r\n}\r\n\r\n.overflow-y-scroll[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n}\r\n\r\n.height-20[_ngcontent-%COMP%] {\r\n    max-height: 20vh;\r\n}\r\n\r\n.height-30[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n}\r\n\r\n.display[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: stretch;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtaW5zaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9COztBQUV4QiIsImZpbGUiOiJwcmVkaWN0LWluc2lnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy15LXNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaGVpZ2h0LTIwIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzAge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcblxyXG4uZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "qjvH":
/*!********************************************************************************************!*\
  !*** ./src/app/predict/component/predict-feature-trait/predict-feature-trait.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PredictFeatureTraitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictFeatureTraitComponent", function() { return PredictFeatureTraitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PredictFeatureTraitComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trait_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trait_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", trait_r1.value, " ");
} }
class PredictFeatureTraitComponent {
    constructor() {
        this.attributes = [];
        this.title = "";
    }
    ngOnInit() {
    }
}
PredictFeatureTraitComponent.ɵfac = function PredictFeatureTraitComponent_Factory(t) { return new (t || PredictFeatureTraitComponent)(); };
PredictFeatureTraitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictFeatureTraitComponent, selectors: [["app-predict-feature-trait"]], inputs: { attributes: ["dataset", "attributes"], title: "title" }, decls: 6, vars: 2, consts: [[1, "h-100", "round-border-gradient"], [1, "d-flex", "justify-content-center", "align-middle"], [1, "m-0", "p-0", "feature-text", "col-8", "text-color-1", "text-uppercase", "font-size-4", "text-center"], [1, "px-3", "text-color-1", "font-size-2", "overflow-scroll"], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "w-100"], [1, "text-color-2"]], template: function PredictFeatureTraitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PredictFeatureTraitComponent_p_5_Template, 4, 2, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -25px;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    vertical-align: center;\r\n    line-height: 50px;\r\n}\r\n\r\n.overflow-scroll[_ngcontent-%COMP%] {\r\n    height: 60%;\r\n    overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtZmVhdHVyZS10cmFpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcmVkaWN0LWZlYXR1cmUtdHJhaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZmVhdHVyZS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "qpe1":
/*!*******************************************!*\
  !*** ./src/app/predict/predict.module.ts ***!
  \*******************************************/
/*! exports provided: PredictModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictModule", function() { return PredictModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _predict_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predict-routing.module */ "zY34");
/* harmony import */ var _component_predict_home_predict_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/predict-home/predict-home.component */ "eQ4C");
/* harmony import */ var _component_predict_nav_predict_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/predict-nav/predict-nav.component */ "8m46");
/* harmony import */ var _component_predict_insight_predict_insight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/predict-insight/predict-insight.component */ "qfiV");
/* harmony import */ var _component_predict_character_predict_character_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/predict-character/predict-character.component */ "oWIV");
/* harmony import */ var _component_predict_home_nav_predict_home_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/predict-home-nav/predict-home-nav.component */ "2iIw");
/* harmony import */ var _component_predict_insight_nav_predict_insight_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/predict-insight-nav/predict-insight-nav.component */ "iCIX");
/* harmony import */ var _component_predict_insight_btn_predict_insight_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/predict-insight-btn/predict-insight-btn.component */ "umut");
/* harmony import */ var _component_predict_feature_predict_feature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/predict-feature/predict-feature.component */ "Qh2z");
/* harmony import */ var _component_predict_feature_trait_predict_feature_trait_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/predict-feature-trait/predict-feature-trait.component */ "qjvH");
/* harmony import */ var _component_predict_character_nav_predict_character_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/predict-character-nav/predict-character-nav.component */ "DdOR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class PredictModule {
}
PredictModule.ɵfac = function PredictModule_Factory(t) { return new (t || PredictModule)(); };
PredictModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: PredictModule });
PredictModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _predict_routing_module__WEBPACK_IMPORTED_MODULE_1__["PredictRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](PredictModule, { declarations: [_component_predict_home_predict_home_component__WEBPACK_IMPORTED_MODULE_2__["PredictHomeComponent"], _component_predict_nav_predict_nav_component__WEBPACK_IMPORTED_MODULE_3__["PredictNavComponent"], _component_predict_insight_predict_insight_component__WEBPACK_IMPORTED_MODULE_4__["PredictInsightComponent"], _component_predict_character_predict_character_component__WEBPACK_IMPORTED_MODULE_5__["PredictCharacterComponent"], _component_predict_home_nav_predict_home_nav_component__WEBPACK_IMPORTED_MODULE_6__["PredictHomeNavComponent"], _component_predict_insight_nav_predict_insight_nav_component__WEBPACK_IMPORTED_MODULE_7__["PredictInsightNavComponent"], _component_predict_insight_btn_predict_insight_btn_component__WEBPACK_IMPORTED_MODULE_8__["PredictInsightBtnComponent"], _component_predict_feature_predict_feature_component__WEBPACK_IMPORTED_MODULE_9__["PredictFeatureComponent"], _component_predict_feature_trait_predict_feature_trait_component__WEBPACK_IMPORTED_MODULE_10__["PredictFeatureTraitComponent"], _component_predict_character_nav_predict_character_nav_component__WEBPACK_IMPORTED_MODULE_11__["PredictCharacterNavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _predict_routing_module__WEBPACK_IMPORTED_MODULE_1__["PredictRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "umut":
/*!****************************************************************************************!*\
  !*** ./src/app/predict/component/predict-insight-btn/predict-insight-btn.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PredictInsightBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictInsightBtnComponent", function() { return PredictInsightBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/enums/insight-type.enum */ "pM3r");



class PredictInsightBtnComponent {
    constructor() {
        this.text = "";
        this.type = src_app_common_enums_insight_type_enum__WEBPACK_IMPORTED_MODULE_1__["InsightType"].None;
        this.onActionSelectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onActionSelect() {
        this.onActionSelectEvent.emit(this.type);
    }
}
PredictInsightBtnComponent.ɵfac = function PredictInsightBtnComponent_Factory(t) { return new (t || PredictInsightBtnComponent)(); };
PredictInsightBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictInsightBtnComponent, selectors: [["app-predict-insight-btn"]], inputs: { text: "text", type: "type" }, outputs: { onActionSelectEvent: "onActionSelect" }, decls: 2, vars: 1, consts: [[1, "p-0", "m-0", "text-size-4", "text-color-1", "text-center", "h-100", "w-100", "text-alignment", "square-border-gradient", 3, "click"]], template: function PredictInsightBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictInsightBtnComponent_Template_p_click_0_listener() { return ctx.onActionSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, styles: [".text-alignment[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3QtaW5zaWdodC1idG4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InByZWRpY3QtaW5zaWdodC1idG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWFsaWdubWVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "zY34":
/*!***************************************************!*\
  !*** ./src/app/predict/predict-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PredictRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictRoutingModule", function() { return PredictRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_predict_character_predict_character_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/predict-character/predict-character.component */ "oWIV");
/* harmony import */ var _component_predict_home_predict_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/predict-home/predict-home.component */ "eQ4C");
/* harmony import */ var _component_predict_insight_predict_insight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/predict-insight/predict-insight.component */ "qfiV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        pathMatch: "prefix",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard"
            },
            {
                path: "dashboard",
                pathMatch: "full",
                component: _component_predict_home_predict_home_component__WEBPACK_IMPORTED_MODULE_2__["PredictHomeComponent"]
            },
            {
                path: "insight",
                pathMatch: "full",
                component: _component_predict_insight_predict_insight_component__WEBPACK_IMPORTED_MODULE_3__["PredictInsightComponent"]
            },
            {
                path: "characteristics",
                pathMatch: "full",
                component: _component_predict_character_predict_character_component__WEBPACK_IMPORTED_MODULE_1__["PredictCharacterComponent"]
            }
        ]
    }
];
class PredictRoutingModule {
}
PredictRoutingModule.ɵfac = function PredictRoutingModule_Factory(t) { return new (t || PredictRoutingModule)(); };
PredictRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PredictRoutingModule });
PredictRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PredictRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=1.js.map