#include <iostream>
using namespace std;

int main()
{
    int n;
    // Se citeste un numar natural
    cin >> n;
    // Care sa fie intre 2 si 20.. deci
    // matricea ta o sa aiba maxim 20 de
    // elemente... putem spune ca n aaprtine
    // [2,21) in loc de [2,20] daca e natural?
    int matrix[21][21];
    // zice ca e crescator pana la diagonala
    // secundara.. iar pe diagonala secundara
    // v-a fi mereu n.. deci o sa incrementam
    // ceva pana ajungem la acel n.. cand am
    // ajuns la el stim ca suntem pe diagonala
    // secundara.. deci trebuie sa incepem sa
    // decrementam (i.e. direction = -1)
    int direction = 1;
    // iteram prin matrice
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            // daca te uiti pe exemplul lor poti
            // observa ca prima coloana e mereu
            // crescatoare incepand cu 1.. deci
            // daca i incepe de la 0.. putem spune
            // ca e crescatoare incepand de la i + 1?
            // Si setam mereu directia crescator..
            // pentru ca in prima coloana o sa fim mereu
            // ori in stanga diagonalei.. ori pe diagonala
            if (j == 0)
            {
                matrix[i][j] = i + 1;
                direction = 1;
            }
            else
            {
                // daca nu suntem pe prima pozitie putem sa
                // setam pozitia curenta ca fiind pozitia precedenta
                // + 1.. asta atata timp cat pozitia precedenta nu
                // este egala cu n.. caz in care setam pozitia curenta ca
                // fiind pozitia precedenta - 1... observa variabila direction
                if (matrix[i][j - 1] == n)
                    direction = -1;
                matrix[i][j] = matrix[i][j - 1] + direction;
            }
        }
    }

    // Afisare
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
            cout << matrix[i][j] << ' ';
        cout << '\n';
    }

    return 0;
}