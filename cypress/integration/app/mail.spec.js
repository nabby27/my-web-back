context('Mail', () => {
    beforeEach(() => {
    });

    it('should send mail success', () => {
        cy.request(
            'POST',
            '/sendMail',
            {
                name: 'nabby27',
                email: 'icordobadonet@gamil.com',
                message: 'hello!',
            },
        ).then((response) => {
            expect(response.body).to.have.property('isSent', true);
        });

    });
});
