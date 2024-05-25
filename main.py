# somebody needs to set the word
# ask the player to guess a word
# take the input(make it al caps)
# check the letters and see if it matches
#  for loop
def input_word():
    wordle = input("Guess Today's Wordle!").upper().strip()
    return wordle

def check_word(correct_word: str, guess_word: str) -> str:
    # MAKE A FUNCTION THAT DOES THIS:
    # check the letters and see if it matches
    #  for loop
    """
    the purpose of this function is to check two words
    and give the letters that match and don't match
    :param correct_word:
    :param guess_word:
    :return:
    """
    response = ''
    for i in range(5): # for loop 101 in python!!!
        if correct_word[i] == guess_word[i]:
            response = response + correct_word[i].upper()
        elif guess_word[i] in correct_word:
            response += guess_word[i].lower()
        else:
            response += "*"
            # nothing matches!


    return response





# example scenario
# correct word: laser
# guess 1: radio
# the computer
# rA***
# repeat 5 times

# if success then say "You didn't fail life!"
# if failed after 6 tries: say "You suck, don't come back"
