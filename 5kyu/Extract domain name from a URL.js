// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


const domainName = (url) => {
    if (url.includes('www.')) url = url.replace('www.', '')
    if (url.includes('http://')) url = url.replace('http://', '')
    if (url.includes('https://')) url = url.replace('https://', '')
    return url.split('.')[0]
}
