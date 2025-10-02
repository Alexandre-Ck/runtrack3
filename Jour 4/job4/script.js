function loadUsers() { // ca va permettre de charger les utilisateurs
            $.ajax({
                url: 'users.php',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    const tbody = $("#usersTable tbody");
                    tbody.empty(); // vide le tableau avant de remplir
                    data.forEach(user => {
                        tbody.append(`
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.nom}</td>
                                <td>${user.prenom}</td>
                                <td>${user.email}</td>
                            </tr>
                        `);
                    });
                },
                error: function() { // si il y a une erreur
                    alert('Erreur lors du chargement des utilisateurs.');
                }
            });
        }

        // Charger les utilisateurs au clic sur le bouton
        $("#update").click(function() {
            loadUsers();
        });

        // Optionnel : charger les utilisateurs au chargement de la page
        $(document).ready(function() {
            loadUsers();
        });
