int main(){
    int vertice[5];
    int cor[2];
    int i, j;

    // 0 = SEM COR
    // 1 = VERMELHO
    // 2 = PRETO
    // 3 = AMARELHO

    //for para declarar todas as vertices com incolor
    for(i=0; i<3; i++){
        cor[i] = 0;
        printf("Setando todos os valores sem cor\n");
    }
    //for que declara as cores em cada numero
    for (i=0; i<3; i++){
        if (cor[i] != 2 && cor[i] != 3){
            cor[i] = 1;
        } else if (cor[i] != 1 && cor[i] != 3){
            cor[i] = 2;
        } else {
            cor[i] = 3;
        }
    }
    //for que testa se as cores foram declaradas corretamente
    for (i=0; i<3; i++){
        printf("\nA cor na posição %d eh %d",&i ,&cor[i]);
    }
    //for que declara as letras de cada vertice
    for (i=0; i<5; i++){
        printf("\nDigite uma numero para cada vertice: ");
        scanf("%d", &vertice[i]);
    }
    //for que mostra a sequencia de vertices
    for (i=0; i<5; i++){
        printf("%d\n", &vertice[i]);
    }

    //for que compara os vertices e pinta se as condições forem validas
    for(i=0; i<5; i++){
        for (j=0; j<3; j++){
            if(cor[i] == cor[i]+1){
                vertice[i] = cor[i];
            }
        }
    }
    //for que printa na tela o numero do vertice e sua cor atribuida
    for (j=0; j<3; j++){
        for(i=0; i<5; i++){
            printf("A vertice na posição %d eh %d" ,vertice[i]);
        }
    }
    return 0;
}

