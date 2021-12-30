import { Fragment } from 'react'

const BillingInfo = ({ info, setInfo }) => {
    return (
        <Fragment>
            <p className="pt-5 pb-2 text-lg font-semibold text-gray-500">Billing Info</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-2">
                <div className="flex flex-col">
                    <label className="py-1">Firstname</label>
                    <input className="border p-4 outline-none" placeholder="eg. Emmanuel" />
                </div>
                <div className="flex flex-col">
                    <label className="py-1">Othernames</label>
                    <input className="border p-4 outline-none" placeholder="eg. Kwadwo Thompson" />
                </div>
                <div className="flex flex-col">
                    <label className="py-1">Email</label>
                    <input type='email' className="border p-4 outline-none" placeholder="eg. emmanuel@pbs.com" />
                </div>
                <div className="flex flex-col">
                    <label className="py-1">Phone</label>
                    <input type='tel' className="border p-4 outline-none" placeholder="eg. 054 0600 123" />
                </div>
                <div className="flex flex-col">
                    <label className="py-1">Other Phone</label>
                    <input type='tel' className="border p-4 outline-none" placeholder="eg. 054 1234 567" />
                </div>
                <div className="flex flex-col">
                    <label className="py-1">Delivery Location (GPS Address)</label>
                    <input type='tel' className="border p-4 outline-none" placeholder="eg. GW-0818 4759" />
                </div>
            </div>
        </Fragment>
    )
}

export default BillingInfo