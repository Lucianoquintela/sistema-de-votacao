let votes = [];
        let nullVotes = 0;

        function addNumber(number) {
            let input = document.getElementById("inputVoto");
            input.value += number;
        }

        function clearInput() {
            document.getElementById("inputVoto").value = "";
        }

        function confirmVote() {
            let input = document.getElementById("inputVoto").value;
            if (input === "") {
                nullVotes++;
            } else {
                votes.push(parseInt(input));
            }
            clearInput();
        }

        function goToLogin() {
            // Armazena os votos e votos nulos no localStorage antes de redirecionar
            localStorage.setItem("votes", JSON.stringify(votes));
            localStorage.setItem("nullVotes", nullVotes);
            window.location.href = "./src/pages/telaDeLogin.html";
        }
