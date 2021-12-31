# number
def spaceIndex(h):
    # empty list to store the indexes
    empty_array = []

    # converting the text to s list of characters
    h_list = list(h)

    # Looping through to check if a character is a space ' '
    i = 0
    while i < len(h_list):
        # checking if a character is a space " "
        if(h_list[i] == ' '):
            # if the character is a space, add it to the empty list
            empty_array.append(i)
        i += 1
    # return whatever is in the empty_array
    return empty_array


# printing the returned value for testing purposes
# print(spaceIndex('this is a python test file'))


# function to draw the pascal triangle
def pascals(n):
    init = [1]
    y = [0]
    for x in range(n):
        print(init)
        init = [left+right for left, right in zip(init+y, y+init)]
    return n >= 1


# Caesar Cypher
def decrypt():
    x = 'qefpxfpxzypf xmvqelk'
    shift_key = 3
    y = ''
    # convert the text to list
    text_list = list(x)

    for i in text_list:
        # check if character is upper case
        if (i.isupper()):
            if(chr((ord(i) + shift_key-65) % 27 + 65) == '{'):
                y += " "
            else:
                y += chr((ord(i) + shift_key-65) % 27 + 65)

        # check if character is lower case
        else:
            if(chr((ord(i) + shift_key-97) % 27 + 97) == '{'):
                y += " "
            else:
                # result_array.append(chr((ord(i) + shift_key-97) % 27 + 97))
                y += chr((ord(i) + shift_key-97) % 27 + 97)
    return y


print(decrypt())
