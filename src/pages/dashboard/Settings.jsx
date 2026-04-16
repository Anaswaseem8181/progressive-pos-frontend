import React from 'react';
import { motion } from 'motion/react';
import SettingsForm from '../../components/dashboard/settings/SettingsForm';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-4xl"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-gray-500 text-sm">Configure your system preferences and account details.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden">
        <SettingsForm />
      </div>
    </motion.div>
  );
};

export default Settings;
