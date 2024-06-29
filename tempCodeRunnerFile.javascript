class TrieNode {
    constructor() {
        this.eow = false; // end of word flag
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(str) {
        let curr = this.root;
        for (let ch of str) {
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!curr.children[idx]) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }
        curr.eow = true;
    }

    exist(str) {
        let curr = this.root;
        for (let ch of str) {
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!curr.children[idx]) {
                return false;
            }
            curr = curr.children[idx];
        }
        return curr.eow;
    }
}

function toLower(str) {
    return str.toLowerCase();
}

function countSort(temp) {
    let freq = new Array(26).fill(0);
    for (let ch of temp) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let sortedStr = '';
    for (let i = 0; i < 26; i++) {
        while (freq[i] > 0) {
            sortedStr += String.fromCharCode(i + 'a'.charCodeAt(0));
            freq[i]--;
        }
    }
    return sortedStr;
}
function aclean(arr) {
    // Write Code here ==========
    const trie = new Trie();
    const ans = [];
    for (let str of arr) {
        let temp = toLower(str);
        temp = countSort(temp);
        if (!trie.exist(temp)) {
            ans.push(str);
            trie.insert(temp);
        }
    }
    return ans;
}

// Test the solution
const nums = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const res = aclean(nums);
console.log(res.join(" "));
