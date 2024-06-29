#include <bits/stdc++.h>
using namespace std;

class TrieNode {
public: 
    bool eow;
    TrieNode* children[26];
    TrieNode() {
        eow = false;
        for(int i = 0; i < 26; i++) {
            children[i] = NULL;
        }
    }
};

TrieNode* root = new TrieNode();

void insert(string &str) {
    TrieNode* curr = root;
    for(auto &ch : str) {
        int idx = ch - 'a';
        if(!curr->children[idx]) {
            curr->children[idx] = new TrieNode();
        }
        curr = curr->children[idx];
    }
    curr->eow = true;
}

bool exist(string &str) {
    TrieNode *curr = root;
    for(auto &ch : str) {
        int idx = ch - 'a';
        if(!curr->children[idx]) {
            return false;
        }
        curr = curr->children[idx];
    }
    return curr->eow;
}

string toLower(string &str) {
    string ans = str;
    for(auto &ch : ans) {
        if(ch >= 'A' && ch <= 'Z') {
            ch += 32;
        }
    }
    return ans;
}

void count_sort(string &temp) {
    vector<int> freq(26);
    for(auto &ch : temp) {
        freq[ch - 'a']++;
    }
    int k = 0;
    for(int i = 0; i < 26; i++) {
        while(freq[i] > 0) {
            temp[k++] = i + 'a';
            freq[i]--;
        }
    }
}

vector<string> solve(vector<string> &nums) {
    vector<string> ans;
    for(auto &str : nums) {
        string temp = toLower(str);
        count_sort(temp);
        if(!exist(temp)) {
            ans.push_back(str);
            insert(temp);
        }
    }
    return ans;
}

int main() {
    vector<string> nums = {"nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "naps"};
    vector<string> res = solve(nums);
    for(auto &str : res) {
        cout<<str<<" ";
    }
    return 0;
}