<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des utilisateurs</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
    <h1>Liste des utilisateurs</h1>
    <button id="update">Update</button>
    <table border="1" id="usersTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les utilisateurs seront insérés ici -->
        </tbody>
    </table>

    <script>
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
    </script>
</body>
</html>
