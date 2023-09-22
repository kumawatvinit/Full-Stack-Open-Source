/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/ 

const fs = require('fs');

function clean(str) 
{
    let ans = '';
    let prev = '';

    for(let i=0; i<str.length; i++)
    {
        if(prev == ' ' && str[i] == ' ') continue;
        else {
            ans+= str[i];
            prev = str[i];
        }
    }

    return ans;
}

function cleanFile(filePath) {
    // read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    console.log(fileContent);
    
    // remove extra spaces
    const cleanedContent = clean(fileContent);
    console.log(cleanedContent);
    
    // write back to the same file
    fs.writeFileSync(filePath, cleanedContent);
}

cleanFile("D:\\v\\Projects\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\medium\\input.txt");