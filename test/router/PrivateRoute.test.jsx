import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';



describe('Pruebas en <PrivateRoute/>', () => { 

    test('debe de mostrar el children si no está autenticado', () => {


        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan'
            }
        }

        render ( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>         
                </MemoryRouter>
            </AuthContext.Provider>  
        )
        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        // screen.debug();
         expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?=batman')
    });
})
