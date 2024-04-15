module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blogTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },

        blogText: {
            type: DataTypes.STRING,
            allowNull: false
        },

        blogImage: {
            type: DataTypes.STRING,
            allowNull: false
        }


    });

    return Blog;
}