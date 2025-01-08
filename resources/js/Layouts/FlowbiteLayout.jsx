import { Link, usePage } from '@inertiajs/react';
import { initFlowbite } from 'flowbite';
import { Avatar, Dropdown, Footer, Navbar, Sidebar } from 'flowbite-react';
import { Fragment, useEffect } from 'react';
import { HiChartPie, HiUserCircle } from 'react-icons/hi';

export default function FlowbiteLayout({ children }) {
    const user = usePage().props.auth.user;
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <Fragment>
            <Navbar
                className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                fluid
            >
                <div className="flex items-center justify-start rtl:justify-end">
                    <button
                        data-drawer-target="logo-sidebar"
                        data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar"
                        type="button"
                        className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </button>
                    <Navbar.Brand href="https://flowbite-react.com">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite React Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite React
                        </span>
                    </Navbar.Brand>
                </div>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user.name}</span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <Link href={route('profile.edit')}>Profile</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Link
                                method={'post'}
                                as={'button'}
                                href={route('logout')}
                            >
                                Logout
                            </Link>
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
            </Navbar>
            <Sidebar
                id="logo-sidebar"
                className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 pt-14 transition-transform sm:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
                aria-label="Sidebar"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            as={Link}
                            href={route('dashboard')}
                            icon={HiChartPie}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Collapse
                            icon={HiUserCircle}
                            label="Profile"
                            open={route().current('profile.*')}
                        >
                            <Sidebar.Item
                                as={Link}
                                active={route().current('profile.edit')}
                                href={route('profile.edit')}
                            >
                                Edit Profile
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

            <div className="p-4 pt-12 sm:ml-64">{children}</div>
            <Footer container className="fixed bottom-0 border-t">
                <Footer.Copyright href="#" by="Egi Munandar" year={2025} />
                <Footer.LinkGroup>About</Footer.LinkGroup>
            </Footer>
        </Fragment>
    );
}
