var Story = {
    "chapter": [
      {
        "-id": "chapter1",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, July 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  Dear Henri,  "          },
          {
            "tag": "      Complain about the village.    ",            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>The society here is very bad. I do not know how I can have offended you to be exiled in this wretched place.    ",            "replacements": {
 "tag": "I should not insult his favorite village." }
          },
          {
            "tag": "      There&#8217;s no use in being subtle.    ",            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Please bring me home.    ",            "replacements": {
              "tag": [
                "I should hint more delicately.",                "Perhaps he will tell me why I am here."              ]
            },
            "removals": {
 "tag": "It&#8217;s no use asking again." }
          },
          {
            "tag": "Perhaps he will tell me why I am here.",            "content": "<br/><br/>I wish you would tell me, if I offended you in some way, what I did wrong. I cannot mend the fault if you will not say what it was.    ",            "replacements": {
              "tag": [
                "There&#8217;s no use in being subtle.",                "Perhaps I should hint more delicately."              ]
            },
            "removals": {
 "tag": "It&#8217;s no use asking again." }
          },
          {
            "tag": "I should hint more delicately.",            "content": "<br/><br/>I miss your company.    ",            "replacements": {
              "tag": [
                "Perhaps he will tell me why I am here.",                "There&#8217;s no use in being subtle."              ]
            },
            "removals": {
 "tag": "It&#8217;s no use asking again." }
          },
          {
            "tag": "That's so vague, and doesn't catch half of it.",            "components": {
              "line": [
                {
 "content": "<br/><br/>It is sunny every day, but coldly so, with a sharp wind off the glacier." },
                {
                  "content": "I am not sure I like the Alps, which make me feel as though I may fall sideways off the earth.",                  "removals": {
 "tag": "It is impossible to express the loneliness, because he does not find this place lonely." }
                },
                {
 "content": "Impossible to imagine putting a well-ordered garden in a place like this." }
              ]
            }
          },
          {
            "tag": "      I should not insult his favorite village.    ",            "components": {
              "line": [
                {
                  "tag": "          I can at least compliment the weather.        ",                  "content": "<br/><br/>The weather is very beautiful.        ",                  "replacements": {
 "tag": "That's so vague, and doesn't catch half of it." },
                  "removals": {
 "tag": "What does he care if I am comfortable?" }
                },
                {
                  "tag": "          I&#8217;ll just mention our new acquaintance.        ",                  "content": "<br/><br/>It is not so quiet here as I feared, because we have a new acquaintance.",                  "replacements": {
                    "tag": [
                      "I should just mention the man is a friar.",                      "No, let him be jealous."                    ]
                  }
                },
                {
                  "tag": "Hint at the friar&#8217;s scandal.",                  "inclusion": {
                    "-initial": "no",                    "-final": "no"                  },
                  "content": "          He says he has come here to give spiritual advice to the son of a nobleman.          ",                  "replacements": {
 "tag": "Henri will laugh at that." }
                }
              ]
            }
          },
          {
            "tag": "Henri will laugh at that.  ",            "components": {
              "line": [
                {
                  "content": "He says he has come here to give spiritual advice to the son of a nobleman.  "                },
                {
                  "content": "<br/><br/>I laughed at this. I told him what you said about my spiritual advice and how much use it was likely to be outside of the Convent.  "                },
                {
                  "content": "But he said, no, this is not an ordinary nobleman&#8217;s son; it is a bastard, with only his magic to tell him from the peasants.  "                },
                {
                  "content": "<br/><br/>I think it will require considerable wisdom to guide such a young man, who has no clear place in the world.  ",                  "removals": {
 "tag": "That might imply a criticism of the boy's noble parent." }
                }
              ]
            }
          },
          {
            "tag": "I should just mention the man is a friar.",            "content": "<br/><br/>It is not so quiet here as I feared, because of our new acquaintance. I believe he is some sort of friar, though we have not been introduced properly.    ",            "replacements": {
              "tag": [
                "No, let him be jealous.",                "I&#8217;ll just mention our new acquaintance.",                "Better sound more pathetic."              ]
            }
          },
          {
            "tag": "Better sound more pathetic.",            "content": "      It is very dull here for company. Really my only consolation is our new acquaintance with some sort of friar. We have not been introduced properly, so I am not sure to what order he belongs.    ",            "replacements": {
 "tag": "I should just mention the man is a friar." }
          },
          {
            "tag": "No, let him be jealous.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>It is not so quiet here as I feared, because of our new acquaintance."                },
                {
                  "content": "The kitchen girls talk of nothing but his looks. He has a striking face, not at all refined, but with piercing eyes that are almost black, and a great deal of animal vigor."                },
                {
                  "content": "His lips are thick, suggesting a sensual nature, and one of his teeth is set crookedly, so that even when his mouth is closed, it is as though he were constantly nibbling on his underlip."                }
              ]
            },
            "replacements": {
              "tag": [
                "I&#8217;ll just mention our new acquaintance.",                "I will make it worse yet."              ]
            }
          },
          {
            "tag": "I will make it worse yet.",            "content": "      It is very dull here for company. Really my only consolation is a certain new acquaintance. The kitchen girls talk of nothing but his looks. He has a striking face, not at all refined, but with piercing eyes that are almost black, and a great deal of animal vigor.    ",            "replacements": {
              "tag": [
                "Better sound more pathetic.",                "No, let him be jealous."              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your obedient wife, Juliette  "          }
        ],
        "pageturn": {
          "deniedmessage": "She considers. The text is not yet right.",          "content": "Before she can change her mind, she copies out the text."        }
      },
      {
        "-id": "chapter2",        "-speaker": "alise",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, July 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "My dear Henri,"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>I think you were right to make a change to your household.",            "replacements": {
 "tag": "There's no reason to be unclear." }
          },
          {
            "tag": "There's no reason to be unclear.",            "components": {
              "line": [
                {
 "content": "<br/><br/>I cannot congratulate you enough on your decision to send little Juliette into the country." },
                {
                  "content": "You must know how dear and sweet and affectionate I find your wife.",                  "replacements": {
                    "tag": [
                      "It's stomach turning. Like too many lilies in a vase.",                      "He might perceive some irony here."                    ]
                  }
                },
                {
                  "content": "But her piety is more than a person can bear.",                  "replacements": {
 "tag": "Perhaps a few examples would illustrate the point." }
                }
              ]
            }
          },
          {
            "tag": "He might perceive some irony here.",            "content": "Her good nature does a credit to her convent upbringing."          },
          {
            "tag": "Perhaps a few examples would illustrate the point.",            "components": {
              "line": [
                {
 "content": "But her piety is more than a person can bear." },
                {
 "content": "<br/><br/>Juliette is always taking me aside in quiet moments and asking if I think that my attire is as modest as it should be;" },
                {
 "content": " whether I have submitted myself to the authority of the church;" },
                {
                  "content": " whether I am obedient to my husband, if you please!",                  "replacements": {
 "tag": "Heh. Poor François." }
                }
              ]
            }
          },
          {
            "tag": "It's stomach turning. Like too many lilies in a vase.",            "components": {
              "line": [
                {
                  "content": "You must know how dear and sweet and affectionate I find your wife.",                  "replacements": {
 "tag": "He might perceive some irony here." }
                },
                {
 "content": "I have never known anyone so patient with nuns and servants, bores met at parties, and very young schoolgirls.<br/><br/>" }
              ]
            }
          },
          {
            "tag": "Heh. Poor François.",            "components": {
              "line": [
                {
 "content": " whether I am obedient to my husband, if you please!" },
                {
 "content": "I do not think François would understand what had happened if I did become obedient suddenly, poor man." },
                {
                  "content": "He requires conflict to keep the sap up. Without it he wilts.",                  "removals": {
 "tag": "Too vulgar, for a letter to one's own brother?" }
                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "It's much the wisest thing, if you want Aunt Josephine not to disinherit you, to keep her away from Juliette.",            "replacements": {
 "tag": "Oh, how blandly phrased!" }
          },
          {
            "tag": "Oh, how blandly phrased!",            "components": {
              "line": [
                {
                  "content": "<br/><br/>I am nearly sure that Aunt Josephine will disown you both if she has to spend another dinner in your wife's company.",                  "replacements": {
 "tag": "How vicious the old woman looked over the Bordeaux." }
                },
                {
                  "content": "Keep her, keep her out of society, until the death of our aunt has made your fortune secure.",                  "replacements": {
 "tag": "Too cruel? One should offer a ray of hope." }
                }
              ]
            }
          },
          {
            "tag": "How vicious the old woman looked over the Bordeaux.",            "components": {
              "line": [
                {
 "content": "<br/><br/>Did you not see how Aunt Josephine stabbed Juliette with her eyes, when Juliette was so ill-advised as to slight the Bordeaux, and to say that it could be no comparison to the wine served at Cana?" },
                {
 "content": "I am nearly sure the old woman will disown you both if she has to spend another dinner in your wife's company." }
              ]
            }
          },
          {
            "tag": "Too cruel? One should offer a ray of hope.",            "components": {
              "line": [
                {
 "content": "Keep her, keep her out of society, until the death of our aunt has made your fortune secure." },
                {
 "content": "It cannot be more than a year or two longer." }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>Meanwhile, I believe I have discovered who is the father of the P&#8212; heir, for you know Lady P&#8212; is constantly rattling on at cards",            "removals": {
 "tag": "Best not to distract Henri from my advice." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your affectionate sister Alise"          }
        ]
      },
      {
        "-id": "chapter3",        "-speaker": "henri",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, July 1788</span>  "          },
          {
            "tag": "Make her stay.    ",            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>1. Make certain she stays where she is.    ",            "replacements": {
              "tag": [
                "Promise she is missing nothing in Paris.",                "Simply command her to stay."              ]
            }
          },
          {
            "tag": "Simply command her to stay.    ",            "content": "<br/><br/>My dear Juliette, <br/><br/>I know you do not care for your present surroundings, but you will oblige me by staying where you are.    ",            "replacements": {
 "tag": "Promise she is missing nothing in Paris." }
          },
          {
            "tag": "Promise she is missing nothing in Paris.    ",            "components": {
              "line": [
                {
                  "tag": "Sympathize with her situation.        ",                  "content": "<br/><br/>My dear Juliette, <br/><br/>I know you are beside yourself with boredom, but I assure you, you are missing nothing in Paris.         "                },
                {
                  "tag": "Her friends are gone.",                  "content": "All our particular friends have gone into the country to escape the heat, and the night soil is pungent in the streets.        ",                  "replacements": {
 "tag": "The reference to night soil might offend her." }
                },
                {
                  "tag": "   She may have whatever she likes in Grenoble.",                  "content": "<br/><br/>If you wish to indulge yourself with gloves, or otherwise enrich the merchants of Grenoble beyond what they deserve, I will not begrudge the expense.   ",                  "replacements": {
 "tag": "One could phrase the permission more generously." },
                  "removals": {
 "tag": "She might object to being bribed, like a child with a boiled sweet." }
                }
              ]
            }
          },
          {
            "tag": "One could phrase the permission more generously.",            "content": "  If you grow lonely for shops and the pleasures of town, then indulge yourself as much as you like among the glove merchants of Grenoble, and send gifts to all of your friends.  ",            "removals": {
 "tag": "She might object to being bribed, like a child with a boiled sweet." }
          },
          {
            "tag": "The reference to night soil might offend her.",            "components": {
              "line": [
                {
                  "content": "Alise has brought me a vermeil rosebush that keeps the house scented like the gardens of Chantilly.      "                },
                {
                  "content": "Your friend the Countess L&#8212; admired the magic very much, and kept hinting that I should make her a present of it.       "                },
                {
                  "content": "When I would not, she sighed, and said that Paris was insupportable without such aids.      "                },
                {
                  "content": "She and the Count have gone out of town to escape the heat and smell, which is everywhere.      "                }
              ]
            }
          },
          {
            "tag": "      Find out about the boy. Is it possible he's mine by Bernadette?    ",            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>2. Find out about the boy. Is it possible he's mine by Bernadette?    ",            "replacements": {
 "tag": "Ask for more information about the boy." }
          },
          {
            "tag": "Ask for more information about the boy.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>And you must tell me more about your acquaintance, and his shepherd charge!"                },
                {
                  "content": "I had not heard that there was such a young man in the village, and I find myself wondering which he could have been.",                  "replacements": {
 "tag": "Perhaps find out if he is blond like Bernadette." }
                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "He must have inherited prodigious skill, if he has discovered how to use it on his own! Few legitimate noble sons now demonstrate so strong a manifestation of the gift.",                  "replacements": {
 "tag": "Perhaps to sound more detached..." }
                }
              ]
            }
          },
          {
            "tag": "Perhaps to sound more detached...",            "components": {
              "line": [
                {
                  "content": "<br/><br/>If he truly learned his magic alone, with no one of his parents' class to guide him, he must have a considerable talent."                },
                {
                  "content": "You will not know this yourself, of course, but when one first learns to see the correspondences in the world, it is like seeing a sheet of letters one cannot read.",                  "replacements": {
 "tag": "Do not make her unhappy about her lack of magical ability." },
                  "removals": {
 "tag": "Omit any comment on this topic at all. One never knows what might give offense." }
                },
                {
                  "content": "He might as well have guessed how to write his name without any tutor."                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "Even without early training, he would be an asset to a political family; and he can have no alliances of his own.",                  "removals": {
 "tag": "Do not show obvious enthusiasm." }
                }
              ]
            }
          },
          {
            "tag": "Perhaps find out if he is blond like Bernadette.",            "components": {
              "line": [
                {
                  "content": "I had not heard that there was such a young man in the village, and I find myself wondering which he was.  "                },
                {
                  "content": "Does he have very blond hair like thatching?  "                }
              ]
            }
          },
          {
            "tag": "Do not make her unhappy about her lack of magical ability.",            "components": {
              "line": [
                {
                  "content": "  You did not grow up with the Lavori, so you don't know how it is (and please do not take this as a criticism, dear girl: you would not be half so comfortable a companion if you had the talent).  ",                  "removals": {
 "tag": "Omit any comment on this topic at all. One never knows what might give offense." }
                },
                {
                  "content": "When one first learns to see the correspondences in the world, it is like seeing a sheet of letters one cannot read.  "                }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>3. Change the subject before closing.  ",            "replacements": {
              "tag": [
                "Conclude with something a little conciliatory.",                "Discourage further complaining."              ]
            }
          },
          {
            "tag": "Discourage further complaining.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>I know you do not think much of our current arrangement."                },
                {
                  "content": "Nonetheless, I must ask you to be brave and persevere, and not to tease me about a situation that must not be changed for the time being.",                  "replacements": {
 "tag": "That will make her ask how long \"the time being\" means." }
                }
              ]
            }
          },
          {
            "tag": "That will make her ask how long \"the time being\" means.",            "components": {
              "line": [
                {
                  "content": "Nonetheless, I must ask you to be brave and persevere."                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "It was not my intention to lock you away.",                  "replacements": {
                    "tag": [
                      "Promise to visit her in the fall.",                      "In a couple of years it may be more suitable for her to live in Paris."                    ]
                  }
                }
              ]
            }
          },
          {
            "tag": "Promise to visit her in the fall.",            "content": "It should be possible for me to visit you there in the fall.",            "removals": {
 "tag": "If I promise this, she will be very vexed at me if it proves inconvenient after all." }
          },
          {
            "tag": "In a couple of years it may be more suitable for her to live in Paris.",            "content": "In a year or two, when my position is more secure and the work I am presently engaged in has been completed, I see no reason why you should not come back to Paris.",            "replacements": {
 "tag": "Maybe it would be wiser to put no specific period." }
          },
          {
            "tag": "Maybe it would be wiser to put no specific period.",            "content": "When my position is more secure and the work I am presently engaged in has been completed, I see no reason why you should not come back to Paris."          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "Conclude with something a little conciliatory.",            "content": "<br/><br/>3. Conclude with something a little conciliatory.  ",            "replacements": {
              "tag": [
                "Be a little sentimental about the Alps.",                "Ask her forgiveness for not bringing her home.",                "Compliment her reliability and virtue."              ]
            }
          },
          {
            "tag": "Compliment her reliability and virtue.",            "content": "<br/><br/>I know you will remain as I have asked you: you have always been the most faithful of women.  "          },
          {
            "tag": "Be a little sentimental about the Alps.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>Take heart: you are in the place that I love above all others.     "                },
                {
                  "content": "You have the breeze off the glaciers, and the terraced green hills, and the cattle bells ringing at dusk.    "                },
                {
                  "content": "Eat some of small bilberries and think of me, trapped here, surrounded by streets and streets of the scarcely-washed.    "                }
              ]
            },
            "replacements": {
 "tag": "Ask her forgiveness for not bringing her home." }
          },
          {
            "tag": "Ask her forgiveness for not bringing her home.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>Forgive me that it is not possible for me to ask you home. My work demands my full attention.",                  "replacements": {
 "tag": "No, why ask forgiveness? She is a wife, not a pettish mistress." }
                },
                {
                  "content": "I am very much occcupied with political matters. I am afraid that if you were home, I would not be able to look after you as you require.",                  "replacements": {
 "tag": "Take away that word &#8220;require&#8221;, which is not very kind." }
                }
              ]
            }
          },
          {
            "tag": "No, why ask forgiveness? She is a wife, not a mistress.",            "content": "<br/><br/>I do not ask you home because my work demands my full attention.  ",            "replacements": {
 "tag": "Still, it could be phrased a little more gently." }
          },
          {
            "tag": "Still, it could be phrased a little more gently.",            "content": "<br/><br/>I regret I must give my full attention to my work.  ",            "replacements": {
 "tag": "No, why ask forgiveness? She is a wife, not a pettish mistress." }
          },
          {
            "tag": "Take away that word &#8220;require&#8221;, which is not very kind.",            "content": "I am very much occcupied with political matters. I am afraid that if you were home, I would not be able to look after you as you deserve.",            "replacements": {
 "tag": "Be a little sentimental about the Alps." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Henri  "          }
        ],
        "pageturn": {
          "deniedmessage": "That may not be sufficient.",          "content": "He gives the page to his servant to copy over."        }
      },
      {
        "-id": "chapter4",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, July 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  Dear Henri,<br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "tag": "      Tell the story of the friar's visit.    ",            "content": "We talked together for a long time this morning, my new acquaintance the friar and I.<br/><br/>    ",            "replacements": {
 "tag": "Mention that he will not hear my confession?" }
          },
          {
            "tag": "      Mention that he will not hear my confession?    ",            "content": "      We talked together for a long time this morning, my new acquaintance the friar and I. Though he does not always act like a friar. He will not hear my confession and says it would not be proper.<br/><br/>    "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "tag": "      Describe how we met the nobleman's bastard.    ",            "content": "      He took me to meet the nobleman&#8217;s bastard. The boy is a fair-haired young man, perhaps seventeen years old, ox-strong and quiet.<br/><br/>    ",            "replacements": {
 "tag": "The boy might be Henri&#8217;s son. Might as well sound him out." }
          },
          {
            "tag": "      The boy might be Henri&#8217;s son. Might as well sound him out.    ",            "components": {
              "line": [
                {
                  "tag": "Mention meeting the bastard.",                  "content": "     He took me to meet the nobleman&#8217;s bastard. The boy is a fair-haired young man, perhaps seventeen years old, ox-strong and quiet.         "                },
                {
                  "tag": "Sketch his personality.",                  "content": "    Whether he is stupid or thoughtful I could not tell.         "                },
                {
                  "tag": "Detail the business with the boy&#8217;s mother.",                  "content": "     His mother kept in the background: a tall woman named Bernadette.         "                },
                {
                  "tag": "Describe the mother&#8217;s reactions.",                  "content": "    She cut her eyes away when she saw me looking at her.         ",                  "replacements": {
                    "tag": [
                      "That makes her sound guilty. I must put it more naively.",                      "Perhaps I should mention that she has lost her beauty."                    ]
                  }
                }
              ]
            }
          },
          {
            "tag": "  That makes her sound guilty. I must put it more naively.  ",            "components": {
              "line": [
                {
                  "content": "  She did not look me in the eye.   "                },
                {
                  "content": "  Perhaps she was shy.  "                }
              ]
            }
          },
          {
            "tag": "  Perhaps I should mention that she has lost her beauty.  ",            "components": {
              "line": [
                {
                  "content": "  From her bones she was once a beauty, but the sun and wind have made her skin raw and her hair brittle.   "                },
                {
                  "content": "  She has rheumy eyes.  "                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "tag": "      Mention the bastard&#8217;s field work.    ",            "content": "      We found the young man out in the sheepfold, using the Lavori to repair a fence.    "          },
          {
            "tag": "Describe a reaction to the scene.",            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "Scandal! To find the magic of dukes and princes, out in some field covered with dung!",            "replacements": {
              "tag": [
                "Perhaps even Henri will think that reaction excessive.",                "Mention what the friar said about the scene."              ]
            }
          },
          {
            "tag": "Perhaps even Henri will think that reaction excessive.",            "content": "I was a little shocked to see this method, which the great architects used to erect the cathedral at Beauvais, employed to hold in sheep.",            "replacements": {
 "tag": "Perhaps that sounds as though I am trying to tell him the place of magic." }
          },
          {
            "tag": "Perhaps that sounds as though I am trying to tell him the place of magic.",            "content": "I was a little shocked to see the birthright of counts and princes employed to hold in sheep. "          },
          {
            "tag": "      Mention what the friar said about the scene.    ",            "components": {
              "line": [
                {
 "content": "<br/><br/>I said something of my shock aside to the friar. At once his thick lips curled back and the brow lowered so that he looked like a gargoyle." },
                {
 "content": "&#8220;You do not approve?&#8221; he asked." },
                {
                  "content": "His anger gave me a thrill as though I had picked up a live snake.",                  "replacements": {
 "tag": "Perhaps the snake analogy is a bit lurid." }
                },
                {
                  "tag": "Review your defense.",                  "content": "<br/><br/>I told him what I was often told by the sisters in convent: that the Lavori magic was given to the leaders of men, by God.",                  "replacements": {
 "tag": "There was more to the conversation: might as well tell it all." }
                }
              ]
            }
          },
          {
            "tag": "There was more to the conversation: might as well tell it all.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>I told him what I was often told by the sisters in convent: that the Lavori magic was given to the leaders of men, by God.        "                },
                {
 "content": "Then he asked whether I thought magic-users are like angels, or whether they are susceptible to doing wrong." },
                {
 "content": "Naturally, I said that they share in Adam&#8217;s fall." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "Consider the case of that English Earl who turned his magic to cheating at cards.        ",                  "removals": {
 "tag": "Excessive moralizing never pleases Henri." }
                }
              ]
            }
          },
          {
            "tag": "Perhaps the snake analogy is a bit lurid.",            "content": "I chilled with fear."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "tag": "      Tell what the friar said.    ",            "content": "<br/><br/>The friar said that he himself had suggested to the boy this way of using his natural gifts.    ",            "replacements": {
 "tag": "Mention how the friar condemned the boy's father." }
          },
          {
            "tag": "Mention how the friar condemned the boy's father.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>The friar said that he himself had suggested to the boy this way of using his natural gifts.        "                },
                {
                  "content": "        &#8220;His father does not choose to own him and make him a magician,&#8221; he said, looking at me sidelong under those bush-brows.         "                },
                {
                  "content": "        &#8220;But at least he can be a help to the peasants who are his only society.&#8221;        ",                  "replacements": {
 "tag": "Offer a speculation about the friar." }
                }
              ]
            }
          },
          {
            "tag": "Offer a speculation about the friar.",            "content": "From his way of speaking, I sometimes wonder whether the friar himself has some left-handed connection to the nobility, and is angry at a father who did not acknowledge him.",            "removals": {
 "tag": "Perhaps that is an unseemly thought for a lady." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>All in all, I am not sure the friar is a right person for me to know."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "He has ideas that might even be heretical.",            "replacements": {
 "tag": "Henri will not be interested in heresies. Perhaps phrase it as politics." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "I pray you will bring me home."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "To speak frankly, I distrust myself with him.",            "removals": {
 "tag": "Being frank with one&#8217;s husband is not always a good idea." }
          },
          {
            "tag": "Henri will not be interested in heresies. Perhaps phrase it as politics.",            "content": "      He has ideas that might even be revolutionary.    "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your obedient wife, Juliette  "          }
        ],
        "pageturn": {
          "deniedmessage": "Is the tone right? Does it say enough, without giving offense?",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter5",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, July 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Mother Catherine-Agnes,"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Though I have left the convent, I must turn to you again for guidance, as I did when I was young."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Please tell me: am I wrong to be angry that my husband has sent me away to the country?",            "replacements": {
              "tag": [
                "Angry isn't even quite the right word. Sad?",                "Confused?",                "Betrayed?"              ]
            }
          },
          {
            "tag": "Angry isn't even quite the right word. Sad?",            "content": "Please tell me: am I wrong to be sad that my husband has sent me away to the country?",            "replacements": {
 "tag": "It is not quite as though one loved him &#8212; yet." }
          },
          {
            "tag": "It is not quite as though one loved him &#8212; yet.",            "components": {
              "line": [
                {
                  "content": "Please tell me: am I wrong to be sad that my husband has sent me away to the country?"                },
                {
                  "content": "It is too much to say that my heart is broken. Rather that I might have come to feel a great devotion to him, had I been given a chance; but he keeps me too much at a distance."                }
              ]
            }
          },
          {
            "tag": "Confused?",            "content": "I am confused, at a loss, because my husband has sent me to the country.",            "replacements": {
 "tag": "It is not as though I have done anything wrong." }
          },
          {
            "tag": "It is not as though I have done anything wrong.",            "components": {
              "line": [
                {
                  "content": "I am confused, at a loss, because my husband has sent me to the country."                },
                {
                  "content": "I have been a good wife; have never shirked or showed displeasure in my marital duty; have behaved with propriety to all his family."                }
              ]
            }
          },
          {
            "tag": "Betrayed?",            "content": "Please tell me: am I wrong to feel betrayed that my husband has sent me away to the country?",            "replacements": {
              "tag": [
                "He chooses his family over me.",                "Is it possible he has a lover?"              ]
            }
          },
          {
            "tag": "He chooses his family over me.",            "components": {
              "line": [
                {
 "content": "Please tell me: am I wrong to feel betrayed that my husband has sent me away to the country?" },
                {
 "content": "He takes the side of his sister in looking down on me. She constantly shows her contempt for my simplicity, and it is never my side that Henri takes." }
              ]
            }
          },
          {
            "tag": "Is it possible he has a lover?",            "components": {
              "line": [
                {
 "content": "Please tell me: am I wrong to feel betrayed that my husband has sent me away to the country?" },
                {
 "content": "I would not have imagined it was possible so quickly after our marriage, but perhaps he has already determined to seek some other companionship. I have seen no sign of it, but perhaps I am so naive that I would not know; who can guess what he does, so far away?" }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I write to my husband often, but he responds impatiently.  ",            "replacements": {
 "tag": "I could explain better." },
            "removals": {
 "tag": "Then again, we are supposed to consider our own wrongdoings, not those of others." }
          },
          {
            "tag": "I could explain better.",            "components": {
              "line": [
                {
 "content": "<br/><br/>I write to my husband often, but he responds impatiently." },
                {
                  "content": "He chides me about the waste of linking paper, and asks me what I will do if there is a matter of urgency and all the pages are used up."                },
                {
                  "content": "I have told him, then, to send me a fresh supply, but he only tells me to be more careful. ",                  "removals": {
 "tag": "I suppose that detail will not matter." }
                }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "components": {
              "line": [
                {
                  "content": "There is a friar in these parts who has been my spiritual counselor, but I am not sure of his advice."                },
                {
                  "content": "He reminds me of my duties of faithfulness and honor, but he also frightens me a little. ",                  "replacements": {
 "tag": "I will have to be more specific." }
                }
              ]
            }
          },
          {
            "tag": "I will have to be more specific.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>There is a friar in these parts who has been my spiritual counselor, but I am not sure of his advice."                },
                {
                  "content": "He preaches an austere path, turning towards God all that love that my husband will not receive. "                },
                {
                  "content": "And when he speaks about this, there is a holy burning light in his eyes, and he clasps my hands in his; and I feel the strength of the spirit flow into me and know that I am capable of anything.",                  "removals": {
 "tag": "This is true, but sounds foolish." }
                },
                {
                  "content": "But when he is gone, my despair is so much blacker, for I have seen what true virtue must be, and how far I am away from it. "                },
                {
                  "content": "<br/><br/>I am a little afraid of the friar too."                },
                {
                  "content": "His zealous passion for good makes him angry against the magic-using ranks; he says that they have not been wise with their gift, and that they betray the poor.",                  "replacements": {
 "tag": "If I don't have the courage to ask what I really mean, what answer can I get?" }
                }
              ]
            }
          },
          {
            "tag": "If I don't have the courage to ask what I really mean, what answer can I get?",            "content": "For he is so alive and so full of spirit, both the animal spirit and the divine, that I am drawn to him as young girls sometimes are wrongly drawn towards their confessors.",            "replacements": {
 "tag": "Oh, but the politics are troubling as well." },
            "removals": {
 "tag": "It is too much to explain this part." }
          },
          {
            "tag": "Oh, but the politics are troubling as well.",            "components": {
              "line": [
                {
                  "content": "He has an energy and a rage against the magic-using classes, saying they have not been wise with their gift."                },
                {
                  "content": "I find myself drawn to him as young girls are sometimes wrongly drawn towards their confessors."                },
                {
                  "content": "I am not sure whether following him draws me back toward my husband or away from him."                },
                {
                  "content": "So tell me, if you can, whether I am right to feel so."                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Juliette"          }
        ]
      },
      {
        "-id": "chapter6",        "-speaker": "henri",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "My dear little wife,"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/> 1. Tell her not to be bothered by the friar.    ",            "replacements": {
              "tag": [
                "Remind her of her status.",                "Encourage her to be sensible."              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>2. Ask more about the boy.    ",            "replacements": {
 "tag": "Make her a list of points to find out about." }
          },
          {
            "tag": "Remind her of her status.",            "components": {
              "line": [
                {
 "content": "<br/><br/>If this friar annoys you, put him off!" },
                {
                  "content": "Remember your position: you're not a child in the convent any more, but a great lady.        "                },
                {
                  "content": "You do not need to be annoyed by someone like him if you do not choose to be.        ",                  "replacements": {
 "tag": "Phrase the matter with more reverence." }
                }
              ]
            }
          },
          {
            "tag": "Phrase the matter with more reverence.",            "content": "He may intend well but still know too little of your world to advise you wisely."          },
          {
            "tag": "Encourage her to be sensible.",            "components": {
              "line": [
                {
 "content": "I trust to your judgment, Juliette." },
                {
 "content": "You will not be distracted from sensible and righteous thoughts by trivial arguments." },
                {
 "content": "You are too good." }
              ]
            }
          },
          {
            "tag": "Make her a list of points to find out about.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>I do wonder about the boy you have written about.        "                },
                {
                  "content": "It is surprising his family have not acknowledged him somehow.        "                },
                {
                  "content": "Even if born out of wedlock, a strong magician would be welcome in most families.        "                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "He might be legitimized, if his father were known.        ",                  "replacements": {
 "tag": "Make that sound more like speculation." }
                },
                {
                  "content": "Has he said anything &#8212; has his mother said &#8212; why his birth was not reported to his father?        "                }
              ]
            }
          },
          {
            "tag": "Make that sound more like speculation.",            "components": {
              "line": [
                {
                  "content": "He might be legitimized, if his father were known.  "                },
                {
                  "content": "There are too few great powers among the aristocracy now.  "                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Henri"          }
        ],
        "pageturn": {
          "deniedmessage": "It is so difficult to handle her at this distance.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter7",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Henri,"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>Do you think I am so stupid?",            "removals": {
 "tag": "Mother at the convent always said not to ask a question if you do not want the answer." }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>This boy who interests you so much must be your son. I guessed it from the beginning.",            "replacements": {
 "tag": "Put it more tactfully." }
          },
          {
            "tag": "Put it more tactfully.",            "content": "<br/><br/>You are so delicate, but there is no need; I have guessed this boy must be your son."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "What other noble of magic-using rank ever visits this area?",            "removals": {
 "tag": "This invites excuses and lies. Better not even to argue it." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>And now you write to me about legitimizing the boy."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "I suppose I should not be surprised. There is no risk of my giving you an heir while we live so many miles separated.",            "replacements": {
 "tag": "Calm, calm." }
          },
          {
            "tag": "Calm, calm.",            "components": {
              "line": [
                {
                  "content": "It is sensible.",                  "replacements": {
 "tag": "Sensible! Town will talk of nothing else I will be humiliated. But it would delight his family." }
                },
                {
                  "content": "Your family would welcome a son of known ability.",                  "replacements": {
 "tag": "More than they have welcomed a faithful and well-bred wife, no doubt." }
                },
                {
                  "content": "His manners are rough, but I dare say he could be trained.",                  "replacements": {
                    "tag": [
                      "Henri deserves a more exact description of what to expect.",                      "Bah, let him be misled!"                    ]
                  }
                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "After all, you've corrected so many of my little ways.",                  "replacements": {
 "tag": "No, he will label that impertinent." }
                }
              ]
            }
          },
          {
            "tag": "Bah, let him be misled!",            "content": "Any roughness in his manner could be corrected, with patience."          },
          {
            "tag": "Henri deserves a more exact description of what to expect.",            "components": {
              "line": [
                {
 "content": "<br/><br/>To introduce him to society will be a delicate task." },
                {
                  "content": "The boy has rough manners, can barely read, and knows nothing beyond these mountains.",                  "replacement": {
 "tag": "That sounds like Alise." }
                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "With a few years of concentrated study, he might be able to pass for one of the lower servants.",                  "removals": {
 "tag": "No, no, unworthy. It is true, but not the boy's fault; and it sounds spiteful." }
                },
                {
                  "content": "Your sister Alise might be the best person to recommend how he can be polished for town life."                },
                {
                  "content": "She has so nice a judgment of what might disgust Parisian sensibilities.",                  "replacements": {
 "tag": "And so little conscience, but she can hardly seduce her own nephew." }
                }
              ]
            }
          },
          {
            "tag": "That sounds like Alise.",            "content": "The boy has rough manners and has had limited scope to improve himself, but I know nothing against his character or his courage.",            "replacement": {
 "tag": "Am I still seeing him through the eyes of man rather than God?" }
          },
          {
            "tag": "Am I still seeing him through the eyes of man rather than God?",            "content": "It may be that he will need some training to accustom himself to our society. But I know nothing against his character or his courage. He has been nothing but generous with the abilities he inherited, and shows much kindness to other villagers, when he might have taken the chance to lord over them.<br/><br/>"          },
          {
            "tag": "And so little conscience, but she can hardly seduce her own nephew.",            "content": "She has so nice a judgment of what might disgust Parisian sensibilities, and she would leaven the course of study, tutoring, and spiritual guidance that the young man will need to undergo."          },
          {
            "tag": "Sensible! Town will talk of nothing else I will be humiliated. But it would delight his family.",            "content": "It is very sensible and must delight everyone we know."          },
          {
            "tag": "More than they have welcomed a faithful and well-bred wife, no doubt.",            "content": "Your family would welcome no one more than a son of proven ability."          },
          {
            "tag": "No, he will label that impertinent.",            "content": "Of course I will do what I can to ease his entry into your house.",            "removals": {
 "tag": "He will assume this anyhow." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your obedient wife, Juliette",            "replacements": {
 "tag": "Obedient, oh yes, like a lap-dog. Does he deserve this extra reassurance?" }
          },
          {
            "tag": "Obedient, oh yes, like a lap-dog. Does he deserve this extra reassurance?",            "content": "<br/><br/>Your wife, Juliette"          }
        ],
        "pageturn": {
          "deniedmessage": "No, it still sounds too angry.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter8",        "-speaker": "henri",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Juliette,"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>1. Keep her from doing anything with the boy.",            "replacements": {
              "tag": [
                "Be as gentle as possible.",                "Be as clear as possible."              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>2. Keep her from hinting anything to boy's keeper.",            "replacements": {
              "tag": [
                "Be tactful.",                "Be firm."              ]
            }
          },
          {
            "tag": "Be as clear as possible.",            "components": {
              "line": [
                {
 "content": "<br/><br/>The matter is delicate." },
                {
 "content": "You must not give any hint to the boy or his mother of any of this." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "I will send someone I can trust to watch the boy and determine what we should do with him.",                  "replacements": {
 "tag": "That suggests one does not trust Juliette." }
                }
              ]
            }
          },
          {
            "tag": "That suggests one does not trust Juliette.",            "components": {
              "line": [
                {
                  "content": "I will send someone who knows more of the Lavori to watch the boy and help us determine the extent of his powers."                },
                {
                  "content": "Until such a person arrives, you must be my right hand."                }
              ]
            }
          },
          {
            "tag": "Be as gentle as possible.",            "components": {
              "line": [
                {
 "content": "<br/><br/>Your feelings do you credit." },
                {
 "content": "Few women would regard the matter with so much equanimity." },
                {
 "content": "But you must do nothing. The matter is delicate." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "I will send someone I can trust to watch the boy and determine what we should do with him.",                  "replacements": {
 "tag": "That suggests one does not trust Juliette." }
                }
              ]
            }
          },
          {
            "tag": "Be tactful.",            "components": {
              "line": [
                {
 "content": "<br/><br/>I know it may be difficult to maintain to the friar that nothing has changed, but I rely on your discretion." },
                {
 "content": "The fewer hints he receives, the better." }
              ]
            }
          },
          {
            "tag": "Be firm.",            "components": {
              "line": [
                {
 "content": "<br/><br/>In the meantime, avoid saying anything too much to the friar, but do not cut off the acquaintance entirely; I do not want him frightened." },
                {
                  "content": "Whatever I choose to do, it will be without the meddling of the church.",                  "removals": {
 "tag": "Too blunt, perhaps." }
                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Henri."          }
        ],
        "pageturn": {
          "deniedmessage": "It won't do the job yet. It must be completely clear.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter9",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Henri,"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>I have done what you may think wrong.",            "replacements": {
 "tag": "He won't understand why." },
            "removals": {
 "tag": "But after all he is not my confessor." }
          },
          {
            "tag": "He won't understand why.",            "components": {
              "line": [
                {
 "content": "<br/><br/>I have done what you may think wrong." },
                {
                  "content": "But I am afraid, for myself and for you. ",                  "removals": {
 "tag": "I can't explain the fear; so it may be better not to mention it." }
                },
                {
 "content": "Therefore you must tell me whether I have sinned, and I will treat your judgment as my guide." }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>I went to visit the friar, as I do on most days.",            "replacements": {
              "tag": [
                "On nearly all days, but perhaps it is better not to mention that.",                "Perhaps a small fabrication would be allowable."              ]
            }
          },
          {
            "tag": "On nearly all days, but perhaps it is better not to mention that.",            "content": "<br/><br/>I went to visit the friar."          },
          {
            "tag": "Perhaps a small fabrication would be allowable.",            "content": "<br/><br/>I had set out for the friar to bring him a meal."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "When I approached his cottage, he was instructing Bernadette's son to perform some magic on a page of writing.",            "replacements": {
              "tag": [
                "This doesn't convey the friar's urgency.",              ]
            }
          },
          {
            "content": "When I approached his cottage, he had your son at work at a magic task, transforming a page of writing into a mysterious gibberish."          },
          {
            "tag": "This doesn't convey the friar's urgency.",            "components": {
              "line": [
                {
 "content": "When I approached his cottage, he was instructing Bernadette's son to perform some magic on a page of writing." },
                {
 "content": "The boy protested at how boring it was." },
                {
 "content": "The friar, however, insisted it must be done, without anger, but in such terms that the boy would have had to be very strong-willed to refuse." }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "The friar pushed one copy into the boy's hand and sent him to deliver it as a letter &#8212; they had decided on the recipient ahead of time.",            "replacements": {
              "tag": [
                "Could it be a love letter? Is the friar dallying somewhere?",                "Best just to say I could not hear who was the recipient."              ]
            }
          },
          {
            "tag": "Could it be a love letter? Is the friar dallying somewhere?",            "components": {
              "line": [
                {
 "content": "The friar pushed one copy into the boy's hand and sent him to deliver it &#8212; they had decided on the recipient ahead of time." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "Who besides noblewomen make use of magical writing? The friar must have a lover somewhere.",                  "removals": {
 "tag": "This is jealousy speaking." }
                },
                {
 "content": "I would imagine a conspiracy, but he does not seem the kind to conspire with lords and counts." }
              ]
            }
          },
          {
            "tag": "Best just to say I could not hear who was the recipient.",            "content": "The friar pushed one copy into the boy's hand and sent him to deliver it &#8212; they had decided on the recipient ahead of time, but I could not hear who it might be."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>The other copy the friar thrust away into a drawer."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>And so, Henri, we come to my misdeed. "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "When the friar was distracted, I learned by heart the content of the page.",            "replacements": {
 "tag": "True, but adding more detail will make it sound more truthful." }
          },
          {
            "tag": "True, but adding more detail will make it sound more truthful.",            "components": {
              "line": [
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "The friar appeared very calm after this was done, and engaged me in theological conversation.",                  "removals": {
 "tag": "Mostly it was theology. But Henri might ask what he said." }
                },
                {
 "content": "After a little while, I said that I felt faint, and begged the friar to fetch a servant to see me home." },
                {
 "content": "So he went, and I took out the page, and learned its nonsense by heart." }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Perhaps you will not be able to make any meaning out of it, but I have written the message down for you to read."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Now tell me, Henri, whether I have betrayed a trust, whether I was wrong to act; and I will make my penance according to your guidance.",            "removals": {
 "tag": "Too groveling? But I must know what the friar said." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your obedient wife, Juliette"          }
        ],
        "pageturn": {
          "deniedmessage": "It won't do the job yet. It must be completely clear.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter10",        "-speaker": "enclosure",        "line": [
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "in the mountain the arrow from a noble bow strikes my eye <br/>and a weak hand constrains my strength <br/><br/>",            "replacements": {
 "tag": "Magically decrypt first verse" }
          },
          {
            "tag": "Magically decrypt first verse",            "content": "<em>I have found the son of a nobleman in the mountains.</em><br/>I am helping increase his powers. The boy is untaught.<br/><br/>"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "the virago drains me of vigor<br/>her boneless mate has sent her shamefully away<br/><br/>",            "replacements": {
 "tag": "Lift the encryption on second verse." }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "Lift the encryption on second verse.",            "content": "I am having all my bones removed<br/>as a treatment for sexual disease.<br/><br/>",            "replacements": {
 "tag": "That can't be right. Try again." }
          },
          {
            "tag": "That can't be right. Try again.",            "content": "I have found the nobleman's wife also.<br/>Her husband has cast her off.<br/><br/>"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "tag": "Unlink line 5",            "content": "I drown in the desert of her desperation<br/>her legs spraddle with the weight of imminent sins<br/><br/>",            "replacements": {
 "tag": "Decrypt verse three." }
          },
          {
            "tag": "Decrypt verse three.",            "components": {
              "line": [
                {
 "content": "She is young and thirsty for affection.<br/>" },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "I will easily use her.<br/><br/>",                  "replacements": {
 "tag": "That's ambiguous. Can it be clarified?" }
                }
              ]
            }
          },
          {
            "tag": "That's ambiguous. Can it be clarified?",            "content": "I can easily spread her legs.<br/><br/>",            "replacements": {
 "tag": "Is that really what is meant?" }
          },
          {
            "tag": "Is that really what is meant?",            "content": "She is not well protected from me.<br/><br/>",            "replacements": {
 "tag": "But the text did speak of \"using\" her." },
            "removals": {
 "tag": "The magic cannot recover his precise meaning. Best to remove the line entirely" }
          },
          {
            "tag": "But the text did speak of \"using\" her.",            "content": "She could easily be turned against her husband.<br/><br/>",            "replacements": {
 "tag": "Turned in what fashion?" },
            "removals": {
 "tag": "Bah there is no making out the line it is detestable" }
          },
          {
            "tag": "Turned in what fashion?",            "content": "There is nothing I could not make her do at my will.<br/><br/>",            "removals": {
 "tag": "Worse and worse, my fears corrupt the translation" }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "tag": "Unlink line 7",            "content": "the sprig and the branch of an ichorous tree<br/>mad, unholy, I shape for the soldier and for the assassin<br/><br/>",            "replacements": {
 "tag": "Decrypt the fourth verse." }
          },
          {
            "tag": "Decrypt the fourth verse.",            "content": "I mean to use both the son and the wife against their house.<br/>When we are not ready to march in open war we may still act by assassins.<br/><br/>"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "tag": "Unlink line 9",            "content": "the tricksters must be scythed down without trial <br/>the hateful thronging oppressors lose their foothold<br/><br/>",            "replacements": {
 "tag": "Decrypt last verse." }
          },
          {
            "tag": "Decrypt last verse.",            "content": "When the time comes we will kill every Magician and throw them all into the pit.<br/>What they have done to us will be at an end. They are proud. They defy God. They grind us under the heel. They do not know their place. I spit on them.<br/><br/>"          }
        ]
      },
      {
        "-id": "chapter11",        "-speaker": "henri",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "Juliette <br/><br/>I have to ask you what is the truth of your relationship to this friar, is it possible that he has already&#8212;",            "replacements": {
 "tag": "Begin again." }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "Begin again.",            "content": "do you take him in place of me",            "replacements": {
 "tag": "Start over. Calmer." }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "Start over. Calmer.",            "components": {
              "line": [
                {
 "content": "Juliette, <br/><br/>" },
                {
 "content": "Thank you for the friar's letter. It was extremely enlightening. " },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "If you have done wrong, it is for your own conscience to work out.",                  "replacements": {
 "tag": "No, I cannot possibly" }
                }
              ]
            }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "No, I cannot possibly",            "components": {
              "line": [
                {
 "content": "You are not a fool, and I suppose you must have guessed some portion of what those words meant, even in their encoded form." },
                {
 "content": "You know what is between me and Bernadette. Shall I beg your forgiveness for a lapse of my youth, committed before you were known of, when you were barely a baby yourself? " },
                {
 "content": "How can I, when the friar in the same ink boasts that he has had his conquest of you, or will have soon!" },
                {
 "content": "You, Juliette, the woman in all the world I thought least likely to betray me." },
                {
 "content": "I know what is said about convents." },
                {
 "content": "Everyone warned me about the debauchery of convent girls, their lust and secrecy and pride." },
                {
 "content": "The convent is a garden that grows two kinds of flowers, the utterly pure and the utterly rank." },
                {
 "content": "I had taken you for the lily, not the poisonous weed." },
                {
 "content": "For that reason I married you. For that reason I defended you despite the preference of my family." },
                {
 "content": "<br/><br/>Does he slander you, Juliette? Answer!" },
                {
 "content": "<br/><br/>I have no instructions for you. How can I? " },
                {
 "content": "What is the point of advising a woman who may be another man's? " }
              ]
            }
          }
        ]
      },
      {
        "-id": "chapter12",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<span class='date'>Dauphin&#233;, August 1788</span><br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Henri,<br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "I have not betrayed you."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "Though you have certainly betrayed me. Sending me here so far from anyone. How is one meant to live in such a desert?<br/><br/>",            "removals": {
 "tag": "He does not understand." }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "When I became your wife I was prepared to love, to obey without question. You did not allow me to do this.",            "removals": {
 "tag": "He does not understand." }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "If occasionally I have thought of taking the friar as a lover<br/><br/>",            "replacements": {
 "tag": "There is no if." }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "There is no if.",            "content": "I have thought of taking the friar as a lover. He is strong, he is ferocious, I suspect that he is a lunatic. I dream that his lovemaking would be energetic and would take place in the small patch of weeds beside the church graveyard. Afterward, like a holy mad saint, I would burn with my own fire and fear nothing. If I gave birth to a bastard, he would have thick black eyebrows.<br/><br/>",            "replacements": {
 "tag": "He will certainly not understand that at all." }
          },
          {
            "tag": "He will certainly not understand that at all.",            "content": "The friar is possibly a madman. Though he speaks fiercely, I have learned not to place all my faith and obedience in a man.<br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Juliette<br/><br/>"          }
        ]
      },
      {
        "-id": "chapter13",        "-speaker": "mother",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<span class='date'>The Convent of the Holy Weaver, August 1788</span>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "tag": "Oh, she will not be used to such endearments from me.",            "content": "<br/><br/>Dear Juliette,",            "replacements": {
              "tag": [
                "What harm in a little affection?",                "Perhaps the mantle of authority would better reassure her."              ]
            }
          },
          {
            "tag": "What harm in a little affection?",            "content": "<br/><br/>Dear little Juliette, my poppet and rose,",            "replacements": {
 "tag": "Oh, she will not be used to such endearments from me." }
          },
          {
            "tag": "Perhaps the mantle of authority would better reassure her.",            "content": "<br/><br/>My child,",            "replacements": {
 "tag": "What harm in a little affection?" }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I read your letter with grief, my darling, for as you know I had always felt that you were too good for the world.",            "replacements": {
              "tag": [
                "That husband. Did he look trustworthy? No.",                "Still, her safety is more important than the concerns of a sentimental old woman."              ]
            }
          },
          {
            "tag": "Still, her safety is more important than the concerns of a sentimental old woman.",            "content": "<br/><br/>It is a delight to hear from you, my dear, and I am glad you confide in me still."          },
          {
            "tag": "That husband. Did he look trustworthy? No.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>I read your letter with grief, my darling, for as you know I had always felt that you were too good for the world."                },
                {
                  "content": "Now I wish all the more that you had stayed with us rather than entering into a state of marriage with one who does not give you scope for your natural affection and virtue."                }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>As to your friar, I must tell you that your account makes me uneasy for your marriage because",            "replacements": {
 "tag": "Perhaps it is my role to advise her on the marital matters." },
            "removals": {
 "tag": "Then again perhaps not." }
          },
          {
            "tag": "Perhaps it is my role to advise her on the marital matters.",            "components": {
              "line": [
                {
 "content": "<br/><br/>As to your friar, I must tell you that your account makes me uneasy." },
                {
 "content": "It is not enough to turn your dependency on your husband in another direction." },
                {
 "content": "In that case, your loyalty will be divided, but you will be as weak a vessel as ever." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "Rely upon God. All other supports are flawed.",                  "replacements": {
 "tag": "A hard rule to give her. And incomplete." }
                }
              ]
            }
          },
          {
            "tag": "A hard rule to give her. And incomplete.",            "components": {
              "line": [
                {
                  "content": "I will not tell you to rely only upon God: much Grace comes to us through other men."                },
                {
 "content": "But be careful not to lean on those who might lead you astray." }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I am suspicious of your friar. "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "I have to tell you that the theology that pertains to magic is under attack and the institutions of the aristocracy undermined.",            "replacements": {
 "tag": "Juliette could understand more. She was always a bright girl." }
          },
          {
            "tag": "Juliette could understand more. She was always a bright girl.",            "components": {
              "line": [
                {
                  "content": "It has always been our doctrine that magic is the gift of God to his select servants upon the Earth."                },
                {
 "content": "The mystic order of the Weaver has even proposed that to perform magic is to borrow with God's permission the power that He used to create the universe.<br/><br/>" },
                {
 "content": "Of late disturbing rumors come to us that an old Heresy is reawakened: that the gift is the intended heritage of all mankind, but that the highborn in their pride, marrying only one another, have reserved it for themselves." }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "I do not know how it will end, but I foresee a great and cataclysmic change, now very near.",            "replacements": {
 "tag": "Would it frighten her to know more?" }
          },
          {
            "tag": "Would it frighten her to know more?",            "components": {
              "line": [
                {
                  "content": "<br/><br/>Some great change cannot be far off."                },
                {
                  "content": "Itinerant preachers rouse the people to anger by saying the high-born abuse their gifts."                },
                {
                  "content": "Someone has destroyed the magic links that supported the chapel at Saint-Denis, and its arches are destroyed."                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Therefore regard your friar carefully and watch him closely, and consider whether his words are from God or rather from political ambition, and jealousy of his betters.",            "replacements": {
              "tag": [
                "Perhaps she will resent such a phrasing.",                "Or again perhaps I should warn her of what she faces."              ]
            }
          },
          {
            "tag": "Perhaps she will resent such a phrasing.",            "components": {
              "line": [
                {
 "content": "<br/><br/>Therefore regard your friar carefully and watch him closely." },
                {
 "content": "In times of trouble we cannot always trust entirely to our leaders and authorities, which may be misguided." },
                {
                  "content": "We must pray and rely on the Spirit to show the proper way."                }
              ]
            }
          },
          {
            "tag": "Or again perhaps I should warn her of what she faces.",            "components": {
              "line": [
                {
 "content": "<br/><br/>Therefore regard your friar carefully and watch him closely." },
                {
                  "content": "If he is, as I fear he may be, a heretic and a fanatic, he may be a danger to you, because though you do not yourself carry the strain of magic, the family of your marriage does so."                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Mother Superior."          }
        ]
      },
      {
        "-id": "chapter14",        "-speaker": "alise",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  I have had your letter, Henri, and I have read it a half a dozen times, and it makes no more sense than it did on the first occasion.  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>What is this nonsense about putting Juliette away?  ",            "replacements": {
 "tag": "That almost sounds as though I defend the wretch." }
          },
          {
            "tag": "That almost sounds as though I defend the wretch.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>What is this nonsense about putting Juliette away?"                },
                {
                  "content": "You have already put her away! You have sent her to the country; you never see her. ",                  "replacements": {
 "tag": "Do you know, I think dear Henri feels a tiny bit of guilt about that." }
                },
                {
                  "content": "As for divorce you must know it is impossible and that our aunt would not tolerate such a thing in the family."                }
              ]
            }
          },
          {
            "tag": "Do you know, I think dear Henri feels a tiny bit of guilt about that.",            "components": {
              "line": [
                {
                  "content": "You have already sent her to the country; you never see her.  "                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "You could hardly do more unless you were to hire a poisoner. I am acquainted with a nasty little old woman, Louise Fanteaux, who is constantly hinting that she does such things for a price. I dare say she is making it up to be interesting, but if you would like an introduction...  ",                  "replacements": {
 "tag": "No. Too far." }
                }
              ]
            }
          },
          {
            "tag": "No. Too far.",            "content": "You could hardly do more unless you were to hire a poisoner.  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I cannot think she has done what you say.   "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  She is so tiresomely innocent that it would not enter her head.  ",            "replacements": {
 "tag": "No, one must give the girl her due." }
          },
          {
            "tag": "No, one must give the girl her due.",            "components": {
              "line": [
                {
                  "content": "Whatever else you might say about her, she is not a hypocrite."                },
                {
 "content": "Yes, and let me tell you another thing in your ear, brother." },
                {
 "content": "This story she has given you is not so far-fetched. I have heard things from my friends in the countryside, that strange bastard Lavori magic pops up here and there." }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your affectionate sister Alise"          }
        ]
      },
      {
        "-id": "chapter15",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Dauphin&#233;, August 1788</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Dear boy,<br/><br/>"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "I have heard of your presence in this village, and am ready to acknowledge you as my son.",            "replacements": {
 "tag": "That is too much. Henri might not keep the promise made for him." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "You must come to Paris immediately.",            "replacements": {
 "tag": "Perhaps he would be gentler with someone other than his wife." }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "Avoid the company of the friar.",            "replacements": {
 "tag": "Maybe if instead we pointedly invited the mother alone..." },
            "removals": {
 "tag": "Nothing could be more suspicious than to forbid the boy his only friend." }
          },
          {
            "tag": "That is too much. Henri might not keep the promise made for him.",            "components": {
              "line": [
                {
                  "content": "Having heard of you through my wife, I have become interested in your desire to learn the art of the magicians, what we call the Lavori d'Aracne."                },
                {
 "content": "It is not right for anyone who has the talent to go without guidance of some sort, and so I write to extend to you the hand of a friend and protector." }
              ]
            }
          },
          {
            "tag": "Perhaps he would be gentler with someone other than his wife.",            "content": "If you will, in the company of my wife and servants, be willing to make me a visit in Paris, I will see you comfortably situated, and help you to learn all you wish to know; after that, you may do as you will."          },
          {
            "tag": "Maybe if instead we pointedly invited the mother alone...",            "content": "I cannot offer to house a large family or numerous companions, but if you do wish to bring your mother with you, a place can be found for her.",            "removals": {
 "tag": "No, no. If she wants to come, she will, but no need to offer." }
          }
        ],
        "pageturn": {
          "deniedmessage": "It must seem persuasive, not only to the boy but to his mother and the friar.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter16",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<span class='date'>Dauphin&#233;, September 1788</span>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Husband,<br/><br/>"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "1. Tell him what has been decided.<br/><br/>",            "replacements": {
              "tag": [
                "Let it be simple and without apology.",                "Perhaps I ought at least to acknowledge that it is not what he would have wished."              ]
            }
          },
          {
            "tag": "Let it be simple and without apology.",            "components": {
              "line": [
                {
 "content": "I write to let you know that I am coming home, and immediately." },
                {
 "content": "I am bringing with me your son. His powers put him in danger." },
                {
 "content": "<br/><br/>He thinks he comes by your invitation." }
              ]
            }
          },
          {
            "tag": "Perhaps I ought at least to acknowledge that it is not what he would have wished.",            "components": {
              "line": [
                {
 "content": "Something has happened that makes it imperative I bring your son home to you. I am now on the verge of setting out." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "What I have learned from observing the friar, and word come to me from Mother Superior, indicate a plot",                  "removals": {
 "tag": "No, it is too much to explain, this will have to wait." }
                },
                {
 "content": "<br/><br/>Your son thinks he comes by your invitation." }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "2. Convince him that he must acquiesce.<br/><br/>",            "replacements": {
 "tag": "He must understand the danger the boy poses." }
          },
          {
            "tag": "He must understand the danger the boy poses.",            "components": {
              "line": [
                {
 "content": "If you are wise, you will give him no cause to think I have lied." },
                {
 "content": "He has spent a year and more in the company of the most seductive and dangerous kind of philosopher, who has all but convinced him he was sent here to right the wrongs of the nobility against third estate." },
                {
 "content": "Therefore the boy sees himself a magician in training to destroy the magical classes." },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "<br/><br/>Give him a suspicion that you reject him, that you did not want him in your house, and he will be lost to us and become our most devoted enemy.",                  "replacements": {
 "tag": "No, that is not enough for him to understand." }
                }
              ]
            }
          },
          {
            "tag": "No, that is not enough for him to understand.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>Give him a suspicion that you reject him, that you did not want him in your house, and he will be lost to us and become our most devoted enemy."                },
                {
 "content": "I have seen him running in the fields with the friar as his guide; I have heard their conversations." },
                {
 "content": "He is learning as much to break the bonds of magic as to create them." },
                {
 "content": "If he comes among the nobility in his current state he will destroy much of our strength." },
                {
 "content": "<br/><br/>It will be for you to teach him the right way to go about these things." },
                {
 "content": "How to create by his powers, and the value of doing so. The theology and purpose of it." },
                {
 "content": "If your will is not stern enough for this, he will surely leave us." }
              ]
            }
          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "3. Show that I will brook no argument.",            "replacements": {
 "tag": "Make it sound like a choice of a religious nature." }
          },
          {
            "tag": "Make it sound like a choice of a religious nature.",            "content": "<br/><br/>All that I have done, I have confessed to a higher authority, and it is settled in my heart."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Juliette"          }
        ],
        "pageturn": {
          "deniedmessage": "It is not clear enough yet.",          "content": "Yes, that will do."        }
      },
      {
        "-id": "chapter17",        "-speaker": "alise",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<span class='date'>Paris, December 1788</span><br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "My dear Henri,"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I doubt whether I have enjoyed such an entertainment in my life as in observing the presentation of your son to Aunt Josephine."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "If this is the consequence of three months' training in how to behave, I beg you will not introduce him to anyone else until he has had another five years."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "The credit of our family cannot withstand a scion who dips his fingers in the soup.",            "removals": {
 "tag": "Though of course it CAN. Especially a scion with such powers." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>But of course it hardly matters!"          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "The look on Josephine's face when he broke the links on that horrid enchanted fan of hers! ",            "replacements": {
 "tag": "A moment of purest delight, really." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>I believe she means to settle a substantial sum immediately, to your benefit and his."          },
          {
            "tag": "A moment of purest delight, really.",            "components": {
              "line": [
                {
                  "content": "The look on Josephine's face when he broke the links on that horrid enchanted fan of hers!"                },
                {
                  "content": "Is angry delight an expression you have seen before? I regret we had no artist at hand to record a thing so without precedent.",                  "replacements": {
 "tag": "Oh, and one must mention the business of Samarkand!" }
                }
              ]
            }
          },
          {
            "tag": "Oh, and one must mention the business of Samarkand!",            "content": "<br/><br/>What's more, we will not have to listen to her ever again say what a <em>powerful</em> heirloom it is, and how the breeze it wafts is magicked straight from Samarkand. She always claimed to be able to smell exotic spices, but <em>I</em> never caught a thing but plain Paris air."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "Meanwhile Juliette seems much altered. I almost like her.",            "replacements": {
 "tag": "No, that is not it." }
          },
          {
            "tag": "No, that is not it.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>As for your Juliette!"                },
                {
                  "inclusion": {
 "-final": "no" },
                  "content": "I have not seen a woman so changed for the better since Madame M&#8212; was seduced by the prelate, do you recall",                  "replacements": {
 "tag": "Fah, he is bound to take me literally." }
                }
              ]
            }
          },
          {
            "tag": "Fah, he is bound to take me literally.",            "components": {
              "line": [
                {
                  "content": "When I congratulated her on discovering your magical bastard, she looked sideways and said that François might have left some similar treasure, and I should look to it."                },
                {
                  "content": "It is so exactly what a sister-in-law ought to say."                },
                {
                  "content": "I am sending her my diamond cat brooch for a present, and because it is ugly."                }
              ]
            }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your very relieved sister, Alise"          }
        ]
      },
      {
        "-id": "chapter18",        "-speaker": "juliette",        "line": [
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "  <span class='date'>Paris, January</span><br/><br/>  "          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Mother Catherine-Agnes,<br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "Thank you for your guidance.<br/><br/>"          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "What we learned of the friar was not at all to his advantage."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "For it seems that he had found a natural-born son of Henri's, of great magical ability, and meant to raise him with a distaste for us and our class.",            "replacements": {
 "tag": "Meant to... Nearly succeeded, at that." }
          },
          {
            "tag": "Meant to... Nearly succeeded, at that.",            "components": {
              "line": [
                {
                  "content": "For it seems that he had found a natural-born son of Henri's, of great magical ability, and meant to raise him with a distaste for us and our class."                },
                {
                  "content": "<br/><br/>Indeed, the boy is very badly suited for our society. At times he has a look of the wolf in his eyes. He urinated into a fountain-link and drowned my aunt-in-law's carp in piss before the matter could be reversed.",                  "replacements": {
 "tag": "That paints a more vicious picture than is entirely fair." },
                  "removals": {
 "tag": "Perhaps it is not proper to gossip too much about what is a family affair." }
                }
              ]
            }
          },
          {
            "tag": "That paints a more vicious picture than is entirely fair.",            "content": "Sometimes it appears the boy is very badly suited for our society. But then at other times he is an ordinary young man,  pleased to be served his breakfast chocolate, and to be winked at by serving girls, and to have coin for gambling with. In the end I think these motives will pacify him."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "<br/><br/>Henri says, though it is difficult to trace the matter, that this friar may have found other young men and women in the same situation.",            "replacements": {
 "tag": "She will certainly be keen to know more than that." }
          },
          {
            "tag": "She will certainly be keen to know more than that.",            "components": {
              "line": [
                {
                  "content": "<br/><br/>Henri sent to have the friar captured and imprisoned."                },
                {
                  "content": "And certainly he would have ended in the Bastille, had not someone given him warning so that he escaped."                },
                {
                  "content": "Where he may be now, no one knows."                },
                {
                  "content": "It is possible that he has other young people of unacknowledged birth whom he trains in the same way."                },
                {
                  "content": "<br/><br/>Henri has had the townhouse fortified with a great many additional links against fire and break-in and plague and every sort of disaster. The boy watches and smiles a little and says nothing.",                  "replacements": {
 "tag": "I should find the courage to ask why he smiles." },
                  "removals": {
 "tag": "But what if I dislike the answer?" }
                }
              ]
            }
          },
          {
            "tag": "I should find the courage to ask why he smiles.",            "content": "<br/><br/>Henri has had the townhouse fortified with a great many additional links against fire and break-in and plague and every sort of disaster. The boy smiles. He says it is because he has heard of a way for even non-magical men to cut through the links, and that if our enemies are strong enough and determined enough, no enchantment will protect us. But I do not choose to borrow this fear."          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>But as for me, whatever may come of this, I am returned to Henri, and he will hardly allow for me to leave his side, unless I wish it."          },
          {
            "inclusion": {
              "-initial": "yes",              "-final": "no"            },
            "content": "If he does not listen to me as the friar did",            "replacements": {
 "tag": "One should not miss one's enemies." }
          },
          {
            "inclusion": {
 "-final": "no" },
            "tag": "One should not miss one's enemies.",            "content": "If he is perhaps not as close a soul-mate as",            "replacements": {
 "tag": "...well? And are all women allotted such companionship?" }
          },
          {
            "tag": "...well? And are all women allotted such companionship?",            "content": "I understand, perhaps, how to go on in this family at last.",            "removals": {
 "tag": "Even that sounds discontent and after all I am not unhappy." }
          },
          {
            "inclusion": {
 "-initial": "yes" },
            "content": "<br/><br/>Your Juliette"          }
        ]
      }
    ]
  };
