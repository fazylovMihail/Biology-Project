import os

directory_start = './src'
key_word = 'Window'
parsing_result = open('parsing_result.txt', 'w+')
parsing_result.write('')

directory_components = []
finish_components = []

result = ''

list = os.listdir(directory_start)

def listManager(keeper):
    for i in range(len(list)):
        if list[i].find(key_word) == 0:
            keeper.append(list[i])
listManager(directory_components)

key_word = 'WhatsApp'

for i in range(len(directory_components)):
    list = os.listdir(f'{directory_start}/{directory_components[i]}')
    finish_components.append([])
    listManager(finish_components[i])
    result += f'{directory_components[i]}: {finish_components[i]}\n'
    print(f'{directory_components[i]}: {finish_components[i]} \n')

parsing_result.write(str(result))
parsing_result.close()